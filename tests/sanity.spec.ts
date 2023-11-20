import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ApplicationURL from '../helpers/ApplicationURL';
import ProductsPage from '../pages/PruductsPage';

test('sanity test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();

  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^\$15\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '3' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Roee');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Elkabez');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('38202');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

test('demo test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();
  const productsPage = new ProductsPage(page);
  await productsPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
  await productsPage.validateTitle("Products");
});