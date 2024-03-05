class jobPage {

    elements = {

        employmentStatusField: () => cy.get('.oxd-form-row :nth-child(7) .oxd-select-text-input'),
        employmentOptions: () => cy.get("[role='option']"),
        saveButton: () => cy.get("[type='submit']"),

    }

    clickOnEmploymentStatusField() {
        this.elements.employmentStatusField().click();
    }

    selectFullTimeEmployment() {
        this.elements.employmentOptions().each(($el, index, $list) => {
            if ($el.text().includes('Full-Time Permanent')) {
                cy.wrap($el).click()
            }
        })
    }

    clickSaveButton() {
        this.elements.saveButton().click();
        cy.wait(2000);
    }
}

module.exports = new jobPage();
