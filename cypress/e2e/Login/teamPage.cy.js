/// <reference types='cypress' />

import { TeamPage } from "../../support/pageObject/TeamPage";
import { staticTexts, urls } from "../../support/constants";
import { LogInPage } from "../../support/pageObject/LoginPage";

const logInPage = new LogInPage();
const teamUrl = urls.teamUrl;
const team = new TeamPage();
const logInPageUrl = urls.loginInUrl;

describe("Custom Channel Page tests", () => {
  beforeEach("Navigate to Custom Channel Page", () => {
    cy.visit(`${logInPageUrl}`);
    logInPage.enterUserName(Cypress.env("username"));
    logInPage.enterPassword(Cypress.env("password"));
    logInPage.doLogIn();
    cy.url().should("contains", "/tickets");
    cy.visit(`${teamUrl}`);
    cy.url().should("equal", Cypress.config("baseUrl") + urls.teamUrl);
  });

  it("Create New Team", () => {
    team.getCreateNewteamBtn();
    team.enterTeamName(staticTexts.teamName);
    team.enterTeamMember(staticTexts.teamMember);
    team.selectTeamMember();
    team.enterTeamChannelName(staticTexts.teamChannelName);
    team.selectTeamChannelName();
    team.doCreateTeam();
    team.verifyteamName(staticTexts.teamName);
    team.getTeamSuccessMessage().should("have.text", staticTexts.teamMemberSuccessChannelMessage);
  });
});
