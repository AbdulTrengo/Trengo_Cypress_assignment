/// <reference types='cypress' />

import { LogInPage } from "../../support/pageObject/LoginPage";
import { staticTexts, urls } from "../../support/constants";
import { faker } from "@faker-js/faker";

const logInPage = new LogInPage();
const logInPageUrl = urls.loginInUrl;
describe("Log In Page tests", () => {
  beforeEach("Navigate to Log In Page", () => {
    cy.visit(`${logInPageUrl}`);
  });

  //Verify Sign In Page
  it("Verify Log In Page details", () => {
    cy.url().should("contains", logInPageUrl);
    logInPage.verifyLogInPageElements();
  });

  //Login with Valid Credentials
  it("Log In - Valid credentials", () => {
    logInPage.enterUserName(Cypress.env("username"));
    logInPage.enterPassword(Cypress.env("password"));

    logInPage.doLogIn();
    cy.url().should("contains", "/tickets");
  });

  //Login with Invalid Credentials
  it("Log In - Invalid credentials", () => {
    logInPage.enterUserName(faker.internet.email());
    logInPage.enterPassword(faker.internet.password());
    logInPage.doLogIn();
    logInPage.verifyLogInErrorMessage();
    logInPage
      .getErrorLogInMessage()
      .should("contain.text", staticTexts.invalidLogInErrorMessage);
  });
});
