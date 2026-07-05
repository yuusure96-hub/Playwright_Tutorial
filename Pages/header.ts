import { Page } from '@playwright/test';

export class HeaderPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickHome() {
        await this.page.getByRole('link', { name: 'Home' }).click();
    }


    async clickBlog() {
        await this.page.getByRole('link', { name: 'Blog' }).click();
    }

    async clickCart() {
        await this.page.getByRole('link', { name: 'Cart' }).click();
    }

    async clickCheckout() {
        await this.page.getByRole('link', { name: 'Checkout' }).click();
    }

    async clickMyaccount() {
        await this.page.getByRole('link', { name: 'My account' })
        .first()
        .click();
    }

    async clickPromotions() {
        await this.page.getByRole('link', { name: 'Promotions' }).click();
    } 
}