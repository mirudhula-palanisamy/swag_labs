export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = '[data-test="username"]';
      this.passwordField = '[data-test="password"]';
      this.loginButton = page.getByRole('button', { name: 'LOGIN' })
    }
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com/v1/index.html');
    }
  
    async login(username, password) {
      await this.page.locator(this.usernameField).fill(username);
      await this.page.locator(this.passwordField).fill(password);
      await this.loginButton.click();
    }
  }