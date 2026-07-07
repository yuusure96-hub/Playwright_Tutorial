import { test, expect, Page } from '@playwright/test';
import {storePage} from '../../Pages/mainpage/mainpage';


test.describe('Checkout Feature', () => {

  test('add all products to cart', async ({ page }) => {

    const store = new storePage(page);
  
  await store.goto(); 
  await store.addAllProductsToCart();
  
  });

  test('validate sort options', async ({ page }) => {

  const store = new storePage(page);
  
  await store.goto(); 
  await store.validateSortOptions();
  
  });

});