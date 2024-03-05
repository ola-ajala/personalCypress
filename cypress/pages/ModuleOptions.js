class moduleOptions {

   elements = {

        pimSection: () => cy.get('.oxd-main-menu-item-wrapper').eq(1),
    }

    selectPIMSection() {
        this.elements.pimSection().click();
    }

    
}

module.exports = new moduleOptions();
