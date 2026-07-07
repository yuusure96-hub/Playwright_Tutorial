import { test, expect, Page } from '@playwright/test';

export class storePage {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demos.bellatrix.solutions/');
  }

  async addAllProductsToCart() {

    // Wait for products to load
    const products = this.page.locator('text=Add to cart').locator('..'); // Get the parent element of the "Add to cart" button, which is the product card

    const count = await products.count();
    console.log(`Found ${count} products`);

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);

      // Scroll into view (helps with lazy-loaded buttons)
      await product.scrollIntoViewIfNeeded();

      // Click the "Add to cart" button inside this product card
      const addButton = product.locator('text=Add to cart');
      await addButton.click();

      // Wait for the mini-cart to update
      await expect(this.page.locator('.added_to_cart')).toBeVisible({ timeout: 5000 });

      console.log(`Added product ${i + 1} to cart`);
    }
  }
}
