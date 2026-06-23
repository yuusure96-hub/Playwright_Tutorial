import { test, expect, Page } from '@playwright/test';
import { HeaderPage } from './Pages/header';
import { users } from '../test-data/users';

async function login(page: Page, email: string, password: string) {

  const headerPage = new HeaderPage(page);

  await page.goto('https://demos.bellatrix.solutions/');
  await headerPage.clickMyaccount();
  await expect(page).toHaveURL(/.*my-account/);
  await page.fill('#username', email);
  await page.fill('#password', password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByText(`Hello ${users.validUser.name}`)).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
}

test('login to nopcommerce demo', async ({ page }) => {
  await login(page, users.validUser.email, users.validUser.password);
});
