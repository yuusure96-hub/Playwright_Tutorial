import { test, expect, Page } from '@playwright/test';
import {CheckoutPage} from '../../Pages/mainpage/mainpage';

test('add all products to cart', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.addAllProductsToCart();
});
