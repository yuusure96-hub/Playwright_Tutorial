import { test, expect, Page } from '@playwright/test';

test.describe('Smoke Tests', () => {

  test('has title', async ({ page }) => {
    await page.goto('https://demos.bellatrix.solutions/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Bellatrix/);
  });

});