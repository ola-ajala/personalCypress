class utilities {

  elements = {
      successMessageOverlay: () => cy.get("#oxd-toaster_1"),
      url: () => cy.url(),
      await: () => cy.wait(2000),
  }

  assertPersonalDetailsPageIsDisplayed() {
    this.elements.url().should('include', 'viewPersonalDetails/empNumber/');
  }

  await() {
    this.elements.await();
  }

  assertSuccessOverlayMessageIsDisplayed() {
    this.elements.successMessageOverlay().should('include.text', 'Success');
}

}

module.exports = new utilities();
