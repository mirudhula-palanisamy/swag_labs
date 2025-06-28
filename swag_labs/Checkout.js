export class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameField = '[data-test="firstName"]';
      this.lastNameField = '[data-test="lastName"]';
      this.postalCodeField = '[data-test="postalCode"]';
      this.continueButton = page.getByRole('button', { name: 'CONTINUE' })
      this.finishButton = page.getByRole('link', { name: 'FINISH' })
    }
  
    async fillDetails(firstName, lastName, postalCode) {
      await this.page.locator(this.firstNameField).fill(firstName);
      await this.page.locator(this.lastNameField).fill(lastName);
      await this.page.locator(this.postalCodeField).fill(postalCode);
    }
  
    async completeCheckout() {
      await this.continueButton.click();
      await this.finishButton.click();
    }
  }