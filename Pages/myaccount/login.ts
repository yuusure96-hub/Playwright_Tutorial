import { test, expect, Page } from '@playwright/test';
import { HeaderPage } from '../header';
import { users } from '../../test-data/users';

export class login {

  constructor(private page: Page) {}

  async performLogin(email: string, password: string) {

    const headerPage = new HeaderPage(this.page);

    await this.page.goto('https://demos.bellatrix.solutions/');
    await headerPage.clickMyaccount();
    await expect(this.page).toHaveURL(/.*my-account/);
    await this.page.fill('#username', email);
    await this.page.fill('#password', password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }
    
  get errorMessage() {
    return this.page.locator('.woocommerce-error');
  }
}

export class welcomeMessage {

  constructor(private page: Page) {}

  async validateWelcomeMessage() {
    const headerPage = new HeaderPage(this.page);
    await expect(this.page.getByText(`Hello ${users.validUser.name}`)).toBeVisible();
  }

  async performLogout() {

      const headerPage = new HeaderPage(this.page);

      await headerPage.clickMyaccount();
      await this.page.getByRole('link', { name: 'Log out' }).click();
    
    }

}


