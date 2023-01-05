/// <reference types='cypress' />

import { CustomChannelPage } from "../../support/pageObject/CustomChannelPage";
import { staticTexts, urls } from "../../support/constants";
import { LogInPage } from "../../support/pageObject/LoginPage";

const logInPage = new LogInPage();
const customChannelUrl = urls.customChannelUrl;
const customChannel = new CustomChannelPage();
const logInPageUrl = urls.loginInUrl;
describe("Custom Channel Page tests", () => {
  beforeEach("Navigate to Custom Channel Page", () => {
    cy.visit(`${logInPageUrl}`);
    logInPage.enterUserName(Cypress.env("username"));
    logInPage.enterPassword(Cypress.env("password"));
    logInPage.doLogIn();
    cy.url().should("contains", "/tickets");
    cy.visit(`${customChannelUrl}`);
    cy.url().should("equal", Cypress.config("baseUrl") + urls.customChannelUrl);
  });

  it("Create Custom Channel", () => {
    customChannel.getConnectCustomChannelBtn();
    customChannel.enterChannelNameInput(staticTexts.channelName);
    customChannel.doSubmit();
    customChannel.getSuccessMessage().should("have.text", staticTexts.customChannelSuccessMessage);
    customChannel.goBacktoOverView();
    customChannel.verifyCustomChannelName(staticTexts.channelName);
  });
});
