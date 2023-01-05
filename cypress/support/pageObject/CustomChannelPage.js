export class CustomChannelPage {
    constructor() {
      //Page Objects
  
      // page elements
      this.connectCustomChannelBtn = "[aria-label='Connect Custom channel']";
      this.addChannelNameInput = ".col-sm-10 > .form-control";
      this.submitBtn = "[type='submit']";
      this.backtoOverView = "[alt='back']";
      this.successMessage = "[class='growl-message']";
      this.customChannelNameList = "[class=settings-sidebar-item]";
    }
    getConnectCustomChannelBtn() {
      return cy.get(this.connectCustomChannelBtn).click();
    }

    getcustomChannelNameList() {
      return cy.get(this.customChannelNameList);
    }
  
    getChannelNameInput() {
      return cy.get(this.addChannelNameInput);
    }
    getSuccessMessage() {
        return cy.get(this.successMessage);
    }

    doSubmit() {
      cy.get(this.submitBtn).contains("Create channel").click();
    }

    enterChannelNameInput(channelName) {
      cy.get(this.addChannelNameInput).type(channelName);
    }

    verifyCustomChannelName(channelName){
      cy.get(this.customChannelNameList).contains(channelName);
    }

    goBacktoOverView(){
      cy.get(this.backtoOverView).click();
    }
  }



  