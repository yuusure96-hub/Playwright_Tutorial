import { test, expect, Page } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demos.bellatrix.solutions/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bellatrix/);
});

export async function addAllProductsToCart(page: Page) {
  // Navigate to the store homepage
  await page.goto('https://demos.bellatrix.solutions/');

  // Wait for products to load
  const products = page.locator('text=Add to cart').locator('..'); // Get the parent element of the "Add to cart" button, which is the product card

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
    await expect(page.locator('.added_to_cart')).toBeVisible({ timeout: 5000 });

    console.log(`Added product ${i + 1} to cart`);
  }
}

test('add all products to cart', async ({ page }) => {
  await addAllProductsToCart(page);
});
