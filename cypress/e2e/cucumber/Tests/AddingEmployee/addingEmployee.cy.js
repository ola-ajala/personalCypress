import {
    Given,
    When,
    Then,
}
    from "cypress-cucumber-preprocessor/steps";

const loginPage = require('../../../../pages/LoginPage');
const moduleOptions = require('../../../../pages/ModuleOptions')
const informationManagementPage = require('../../../../pages/InformationManagementPage');
const addEmployeePage = require('../../../../pages/AddEmployeePage');
const utilities = require('../../../../pages/Utilities')

let randomNumber = Math.floor(Math.random() * 9000);
const username = 'Admin'
const password = 'admin123'
const firstName = `SafeGuard${randomNumber}`;
const middleName = 'MiddleName';
const lastName = 'LastName';


Given(/^user is logged into hrm portal$/, () => {
	loginPage.visitHRM()
    loginPage.enterUsername(username)
    loginPage.enterPassword(password)
	loginPage.clickLoginButton()
});

When(/^user naviages to pim section$/, () => {
	moduleOptions.selectPIMSection();
});

When(/^user selects add button$/, () => {
	informationManagementPage.clickAddButton();
});

When(/^user fills employee details into the fields provided$/, () => {
	addEmployeePage.enterFirstName(firstName);
    addEmployeePage.enterMiddleName(middleName);
    addEmployeePage.enterLastName(lastName);
    addEmployeePage.getEmployeeID();
});

When(/^user clicks on save button$/, () => {
	addEmployeePage.clickSaveButton();
});

Then(/^employee details entered should be saved successfully into the database$/, () => {
	utilities.assertSuccessOverlayMessageIsDisplayed()
    utilities.assertPersonalDetailsPageIsDisplayed()
});