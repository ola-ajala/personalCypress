class informationManagementPage {

   elements = {

        firstNameField: () => cy.get("[name='firstName']"),
        middleNameField: () => cy.get("[name='middleName']"),
        lastNameField: () => cy.get("[name='lastName']"),
        employeeIDField: () => cy.get('.oxd-input').eq(4),
        saveButton: () => cy.get("[type='submit']"),
    }

    enterFirstName(firstName) {
        this.elements.firstNameField().type(firstName);
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
}

module.exports = new informationManagementPage();
