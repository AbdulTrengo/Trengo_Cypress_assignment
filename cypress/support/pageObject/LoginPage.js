export class LogInPage {
    constructor() {
      //Page Objects
  
      //Auth page elements
      this.usernameInput = "[name='email']";
      this.passwordInput = "[name='password']";
      this.logInBtn = "[type='submit']";
  
      //Invalid login
      this.errorLogInMessage = "[id='LoginErrors']";
  
      //Logout
      this.adminDropdown = "[class='admin-dropdown profile']";
      this.logOutBtn = "[action='/user/logout/']";
    }
  
    //Getters
    getlogInBtn() {
      return cy.get(this.logInBtn);
    }
  
    getUserNameInput() {
      return cy.get(this.usernameInput);
    }
  
    getPasswordInput() {
      return cy.get(this.passwordInput);
    }
  
    getErrorLogInMessage() {
      return cy.get(this.errorLogInMessage);
    }
  
    //Page Actions
    //do sign in
  
    enterUserName(username) {
      cy.get(this.usernameInput).type(username);
    }
  
    enterPassword(password) {
      cy.get(this.passwordInput).type(password);
    }
    doLogIn() {
      cy.get(this.logInBtn).click();
    }
  
    doLogOut() {
      cy.get(this.adminDropdown).click();
      cy.get(this.logOutBtn).click();
    }
  
    verifyLogInErrorMessage() {
      cy.get(this.errorLogInMessage).should("be.visible");
    }
  
    //Verifying Sign In Page Elements
    verifyLogInPageElements() {
      cy.get(this.usernameInput).should("be.visible").should("be.enabled");
      cy.get(this.passwordInput).should("be.visible").should("be.enabled");
      cy.get(this.logInBtn).should("be.visible").should("be.enabled");
    }
  }
  