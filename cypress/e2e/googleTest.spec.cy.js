describe('Trying to reach git Test', () => {
    it('Searches for Paris and checks results', () => {
        
        cy.visit('../../public/index.html');
        cy.get('#title').contains('Title of the page')
        

    });
});