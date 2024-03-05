class personalDetailsPage {

   elements = {

        firstNameField: () => cy.get("[name='firstName']"),
        middleNameField: () => cy.get("[name='middleName']"),
        lastNameField: () => cy.get("[name='lastName']"),
        employeeIDField: () => cy.get('.oxd-input').eq(4),
        createLoginDetailsOption: () => cy.get(""),
        cancelButton: () => cy.get(""),
        saveButton: () => cy.get("[type='submit']"),
        saveEntryButton: () => cy.get("[type='submit']").eq(0),
        driversLicenseField: () => cy.get('.oxd-input').eq(6),
        jobTab: () => cy.get("[role='tablist'] :nth-child(6)"),        
    }

    assertFirstNameMatch(firstName) {
        this.elements.firstNameField().should('have.value', firstName);
    }

    enterMiddleName(middleName) {
        this.elements.middleNameField().type(middleName);
    }

    enterLastName(lastName) {
        this.elements.lastNameField().type(lastName);
    }

    getEmployeeID() {
        this.elements.employeeIDField().invoke('val').as('employeeID', { type: 'static' });
    }

    clickSaveButton() {
        this.elements.saveButton().click();
    }

    clickSaveEntryButton() {
        this.elements.saveEntryButton().click();
    }

    enterDriversLicenseNumber(driversLicense) {
        this.elements.driversLicenseField().type(driversLicense);
    }

    assertDriversLicenseDetailsMatch(driversLicense) {
        this.elements.driversLicenseField().should('have.value', driversLicense);
    }

    clickOnJobTab() {
        this.elements.jobTab().click();
    }

}

module.exports = new personalDetailsPage();
