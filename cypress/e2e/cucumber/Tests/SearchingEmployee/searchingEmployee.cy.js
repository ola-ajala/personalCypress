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
const personalDetailsPage = require('../../../../pages/PersonalDetailsPage')


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


When(/^an employee is added to database$/, () => {
	moduleOptions.selectPIMSection();
    informationManagementPage.clickAddButton();
    addEmployeePage.enterFirstName(firstName);
    addEmployeePage.enterMiddleName(middleName);
    addEmployeePage.enterLastName(lastName);
    addEmployeePage.getEmployeeID();
    addEmployeePage.clickSaveButton();
    utilities.assertSuccessOverlayMessageIsDisplayed()
    utilities.assertPersonalDetailsPageIsDisplayed()
    moduleOptions.selectPIMSection();
});

And(/^the employee is searched by employee ID$/, () => {
	informationManagementPage.typeRetrievedEmployeeID()
    informationManagementPage.clickSubmitButton()
});

Then(/^details of the employee should be displayed$/, () => {
	informationManagementPage.assertEmployeeListIsDisplayed()
    informationManagementPage.assertAddedEmployeeIsDisplayed(firstName)
    informationManagementPage.viewEmployeeDetails(firstName)
    utilities.assertPersonalDetailsPageIsDisplayed()
    personalDetailsPage.assertFirstNameMatch(firstName)
});

When(/^an existing employee is searched by firstname$/, () => {
    moduleOptions.selectPIMSection();
    informationManagementPage.typeEmployeeFirstname(firstName)
    informationManagementPage.clickSubmitButton()
});