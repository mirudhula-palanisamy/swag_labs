export class CartPage {
    constructor(page) {
      this.page = page;
      this.CheckoutButton = page.getByRole('link', { name: 'CHECKOUT' })
    }
  
    async proceedToCheckout() {
      await this.CheckoutButton.click();
    }
  }