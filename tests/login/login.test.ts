import { test, expect, Page } from '@playwright/test';
import { HeaderPage } from '../../Pages/header';
import { users } from '../../test-data/users';
import { login, welcomeMessage } from '../../Pages/myaccount/login';
import { storePage } from '../../Pages/mainpage/mainpage';

test.describe('Login Feature', () => {
  
  test('login with valid credentials', async ({ page }) => {
    const loginPage = new login(page);
    
    await storePage.goto(); // Navigate to the store page before performing login
    await loginPage.performLogin(users.validUser.email, users.validUser.password);
    const welcomeMsg = new welcomeMessage(page);
    await welcomeMsg.validateWelcomeMessage();
    await welcomeMsg.performLogout();
  });

  test('login with invalid credentials', async ({ page }) => {
    const loginPage = new login(page);
    await loginPage.performLogin(users.invalidUser.email, users.invalidUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage)
      .toHaveText('Error: The username ' + users.invalidUser.email + ' is not registered on this site. If you are unsure of your username, try your email address instead.');
  });

});
