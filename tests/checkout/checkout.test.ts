import { test, expect, Page } from '@playwright/test';
import {storePage} from '../../Pages/mainpage/mainpage';


test.describe('Checkout Feature', () => {

  test('add all products to cart', async ({ page }) => {
  // cast to any to avoid TypeScript error if method isn't declared on the exported type
  await (storePage as any).addAllProductsToCart();
  
  });
});