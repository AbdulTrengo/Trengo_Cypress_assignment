export class TeamPage {
    constructor() {
      //Page Objects
  
      // page elements
      this.newTeamBtn = "[aria-label='Create a team']";
      this.teamNameInput = "[data-test='input']";
      this.teamMemberInput = "[data-test='create-team-members']";
      this.teamMemberInputSelect = "[data-test='create-team-members'] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > span";
      this.teamChannelNameInput =  "[data-test='create-team-channels']";
      this.teamChannelNameInputSelect = "[data-test='create-team-channels'] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option";
      this.createTeamBtn = "[data-test='create-team-modal-submit']";
      this.backtoOverView = "[alt='back']";
      this.successMessage = "[class='growl-message']";
      this.teamNameList = "[data-dismiss='modal']";
    }
    getCreateNewteamBtn() {
      return cy.get(this.newTeamBtn).click();
    }

    getTeamSuccessMessage() {
        return cy.get(this.successMessage);
    }

    enterTeamName(teamName){
        cy.get(this.teamNameInput).type(teamName);
    }
  
    enterTeamMember(teamMember){
        cy.get(this.teamMemberInput).type(teamMember);
    }
    
    selectTeamMember(){
        cy.get(this.teamMemberInputSelect).click();
    }
    enterTeamChannelName(channelName){
        cy.get(this.teamChannelNameInput).type(channelName);
    }

    selectTeamChannelName(){
        cy.get(this.teamChannelNameInputSelect).click();
    }

    doCreateTeam(){
        cy.get(this.createTeamBtn).click();
    }

    verifyteamName(teamName){
      cy.get(this.teamNameList).contains(teamName);
    }

  }



  