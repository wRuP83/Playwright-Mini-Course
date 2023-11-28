import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ApplicationURL from '../helpers/ApplicationURL';
import ProductsPage from '../pages/ProductsPage';
import YourCartPage from '../pages/YourCartPage';

test('sanity test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const yourCartPage = new YourCartPage(page);

  await loginPage.loginToApplication();

  await productsPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
  await productsPage.validateTitle('Products');

  await productsPage.chooseProductByTitle('Sauce Labs Backpack');
  await productsPage.chooseProductByTitle('Sauce Labs Fleece Jacket');
  await productsPage.chooseProductByTitle('Sauce Labs Onesie');
  
  await productsPage.validateNumberOfItems('3');
  await productsPage.goToCart();

  await yourCartPage.validatePageUrl(ApplicationURL.YOUR_CART_PAGE_URL);
  await yourCartPage.validateTitle('Your Cart');

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Roee');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Elkabez');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('38202');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('button', { name: 'FINISH' }).click();
  await page.getByRole('button', { name: 'Back Home' }).click();
  // await page.getByRole('link', { name: 'Logout' }).click({ button: 'right' });

});

test('demo test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();
  const productsPage = new ProductsPage(page);
  await productsPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
  await productsPage.validateTitle("Products");
});