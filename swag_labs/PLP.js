export class PLP {
    constructor(page) {
      this.page = page;
      this.sortDropdown = page.getByRole('combobox');
      this.PdpPage = page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' })
      this.addToCartPdp = page.getByRole('button', { name: 'ADD TO CART' })
      this.BackButton = page.getByRole('button', { name: '<- Back' })
      this.addToCartButton = page.getByRole('button', { name: 'ADD TO CART' }).nth(2);
      this.shoppingCartIcon = page.locator('[data-icon="shopping-cart"]');
      this.RemoveButton = page.locator('.btn_secondary.cart_button').nth(0);
    }
  
    async sortProducts(option) {
      await this.sortDropdown.selectOption(option);
    }
  
    async addToCart() {
      await this.PdpPage.click();
      await this.addToCartPdp.click();
      await this.BackButton.click();
      await this.addToCartButton.click();
    }
  
    async goToCart() {
      await this.shoppingCartIcon.click();
      await this.RemoveButton.click();
    }
  }