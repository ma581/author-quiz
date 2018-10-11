describe('My first test', () => {
    it('should have title Author Quiz', () => {
        cy.visit('/')
            .get('.display-4')
            .should('have.text', 'Author Quiz')
    });

    it('should make an alert when clicking an answer', () => {
        cy.visit('/')
            .get('.col-6 > :nth-child(1)')
            .click()
            .get('.alert')
            .get('#continue')
    });
});