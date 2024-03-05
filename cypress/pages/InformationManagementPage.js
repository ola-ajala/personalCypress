class informationManagementPage {

    elements = {

        addButton: () => cy.get("[class*='oxd-button-icon']"),
        employeeID: () => cy.get("@employeeID"),
        employeeIdField: () => cy.get(".oxd-grid-4 .oxd-input"),
        employeeNameField: () => cy.get(".oxd-autocomplete-text-input").eq(0),
        submitButton: () => cy.get("[type='submit']"),
        userlist: () => cy.get(".bi-pencil-fill"),
        allEmployeesFirstname: () => cy.get(".oxd-table-row :nth-child(3)"),
        firstNameRow: () => cy.get(".oxd-table-card :nth-child(3)"),
        employmentStatusField: () => cy.get(".oxd-table-card :nth-child(6)"),

    }

    clickAddButton() {
        this.elements.addButton().click();
    }

    typeEmployeeFirstname(firstName) {
        this.elements.employeeNameField().type(firstName);
        cy.wait(2000)
    }

    typeRetrievedEmployeeID() {
        this.elements.employeeID().then((empID) => {
            this.elements.employeeIdField().type(empID)
        })
        cy.wait(2000)
    }

    clickSubmitButton() {
        this.elements.submitButton().click();
        cy.wait(2000)
    }

    assertEmployeeListIsDisplayed() {
        this.elements.userlist().should('have.length.above', 0)
    }

    assertAddedEmployeeIsDisplayed(firstName) {
        this.elements.allEmployeesFirstname().each(($el, index, $list) => {
            if ($el.text().includes(firstName)) {
                this.elements.allEmployeesFirstname().eq(index).should('include.text', firstName)
            }
        })
    }

    viewEmployeeDetails(firstName) {
        this.elements.allEmployeesFirstname().each(($el, index, $list) => {
            if ($el.text().includes(firstName)) {
                cy.wrap($el).click()
            }
        })
    }

    clickEditButton() {
        this.elements.userlist().click()
    }

    assertEmploymentDetailsIsUpdated() {
        this.elements.employmentStatusField().should('include.text', 'Full-Time Permanent')
    }

}

module.exports = new informationManagementPage();
