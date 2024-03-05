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
const jobPage = require('../../../../pages/JobPage')


let randomNumber = Math.floor(Math.random() * 9000);
let randomDLNumber = Math.floor(Math.random() * 100000000);
let driversLicense = `UK${randomDLNumber}GB`
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

And(/^the employee record is searched by employee ID$/, () => {
    informationManagementPage.typeRetrievedEmployeeID();
    informationManagementPage.clickSubmitButton();
    informationManagementPage.clickEditButton();
});

And(/^details of the employee driver license is updated$/, () => {
    personalDetailsPage.enterDriversLicenseNumber(driversLicense);
    personalDetailsPage.clickSaveEntryButton();
});

Then(/^updated details should be saved$/, () => {
    utilities.assertSuccessOverlayMessageIsDisplayed();
    personalDetailsPage.assertDriversLicenseDetailsMatch(driversLicense);
});

When(/^an existing user is searched by firstname$/, () => {
    moduleOptions.selectPIMSection();
    informationManagementPage.typeEmployeeFirstname(firstName);
    informationManagementPage.clickSubmitButton();
    informationManagementPage.clickEditButton();
});

And(/^details of employment is updated$/, () => {
    personalDetailsPage.clickOnJobTab();
    jobPage.clickOnEmploymentStatusField();
    jobPage.selectFullTimeEmployment();
    jobPage.clickSaveButton();
});

Then(/^updated details should be displayed on employee record$/, () => {
    moduleOptions.selectPIMSection();
    informationManagementPage.typeEmployeeFirstname(firstName);
    informationManagementPage.clickSubmitButton();
    informationManagementPage.assertEmploymentDetailsIsUpdated();
});
