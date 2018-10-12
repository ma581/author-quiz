describe('Author Quiz', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    it('should have title Author Quiz', () => {
        cy.get('.display-4')
            .should('have.text', 'Author Quiz')
    });

    it('should make an alert when clicking an answer', () => {
        cy.selectAnswer()
            .get('.alert')
            .then(element =>
                expect(element.prop('class')).to.be.oneOf(
                    ['alert alert-success alert-dismissible fade show',
                        'alert alert-danger alert-dismissible fade show']))
    });

    it('should make a continue button when clicking an answer', () => {
        cy.selectAnswer()
            .get('#continue')
            .then(element =>
                expect(element.text()).to.be.oneOf(['Continue the fun!', 'Try another :('])
            )
    });
});