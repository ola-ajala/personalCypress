class loginPage {

  elements = {
      usernameField: () => cy.get("[name='username']"),
      passwordField: () => cy.get("[name='password']"),
      loginButton: () => cy.get("[type='submit']"),
  }

  visitHRM(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  enterUsername(username) {
      this.elements.usernameField().type(username);
  }

  enterPassword(password) {
    this.elements.passwordField().type(password);
}

  clickLoginButton() {
      this.elements.loginButton().click();
  }

}

module.exports = new loginPage();
