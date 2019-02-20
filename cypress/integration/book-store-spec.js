describe('Book Store Test', function () {
    it('Navigates the Book Store', function () {
        cy.visit('/');
        cy.url().should('match', /\/$/);
        cy.get('#counter').contains('0');

        cy.get('#counter-buttons\\+').click();
        cy.get('#counter').contains('1');
        cy.contains('J.R.R. Tolkien: The Lord Of The Rings');
        cy.get('#book-2\\+').click();
        cy.contains(`J.R.R. Tolkien${'x'}: The Lord Of The Rings`).click();
        cy.url().should('match', /\/books\/2$/);
        cy.contains('J.R.R. Tolkien: The Lord Of The Rings');

        cy.get('#counter-buttons\\+').click();
        cy.get('#counter').contains('2');

        cy.contains('Back To List').click(); // cy.go('back');
        cy.url().should('match', /\/$/);
        cy.get('#counter').contains('2');
        cy.contains(`J.R.R. Tolkien${'x'}: The Lord Of The Rings`);
    })
});
