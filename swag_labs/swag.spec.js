import { test } from '@playwright/test';
import { LoginPage } from '../swag_labs/Login';
import { PLP } from '../swag_labs/PLP';
import { CartPage } from '../swag_labs/Cart';
import { CheckoutPage } from '../swag_labs/Checkout';

test('End-to-End Checkout Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const plp = new PLP(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Navigate to the login page and log in
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Sort products, add an item to the cart, and navigate to the cart
  await plp.sortProducts('lohi');
  await plp.addToCart();
  await plp.goToCart();

  // Proceed to checkout
  await cartPage.proceedToCheckout();

  // Fill checkout details and complete the order
  await checkoutPage.fillDetails('Mirudhu', 'P', '76562');
  await checkoutPage.completeCheckout();
});
