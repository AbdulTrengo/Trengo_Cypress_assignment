# TRENGO CYPRESS QA Assignment

## Description

This template will help you to have a testing framework as per the standards of cypress TESTING TOOL.
* constant.js - this file under support is created to place all the messages which are available for the application.
* pageObject - It contains the webpage of application where web-page locators & functions related to that page has been defined.
* E2E - test cases related to the webpage has been mentioned under this folder.
* .gitignore - this folder consists of the name of file which doesn't needs to be pushed while performing the commite.

## Pre-requisites
### Web Test Pre-requisite

* node and npm should be installed (to verify run command (node -v , npm -v )
* Unzip the file if loading the code via attachement.
* open terminal.
* cd to unzipped folder /Trengo_Cypress_Assignment
* run the command npm install to install the dependencies


## Test Scenarios
### Web Automation Test Scenarios
|Feature    | Description | Expected |
|--------   |-------------|----------|
|LogIn| Validate user login with both valid and invalid credentials |
|Create custome channel| creates the custom channel using custom name & checking the channel is created successfully |
|Create team| creates team & add team members & channel in it & checking the team is created successfully |


## Test Execution
### Web Test Execution
To run all the test cases in the project for web automation
* To execute with chrome
    ~~~bash
    $ cd 'TRENGO_CYPRESS_ASSIGNMENT'
    $ npm run cypress:execution
    ~~~
-----------------------------------------------------------------------------------------------------------------------------------
   NOTE:
    Test cases will execute and VIDEO results FOR test execution can be seen under video folder. 
    Reference Patch : /Trengo_Cypress_assignment/cypress/videos

