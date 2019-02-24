import chaiUrl from 'chai-url'

chai.use(chaiUrl);

describe('Book Store IT', () => {
    before(() => {
        cy.request('PUT', 'http://localhost:8080/books', [{
            "id": 1,
            "author": "J.R.R. Tolkien",
            "title": "The Hobbit",
            "recommendedReadingAge": 5
        }, {
            "id": 2,
            "author": "J.R.R. Tolkien",
            "title": "The Lord Of The Rings",
            "recommendedReadingAge": 14
        }, {
            "id": 3,
            "author": "Steven King",
            "title": "It",
            "recommendedReadingAge": 16
        }])
    });
    it('Navigates the Book Store', () => {
        cy.visit('/');
        cy.url().should('have.path', "/");
        cy.get('#counter').contains('0');

        cy.get('#counter-buttons\\+').click();
        cy.get('#counter').contains('1');
        cy.contains('J.R.R. Tolkien: The Lord Of The Rings');
        cy.get('#book-2\\+').click();
        cy.contains(`J.R.R. Tolkien${'x'}: The Lord Of The Rings`).click();
        cy.url().should('have.path', "/books/2");
        cy.contains('J.R.R. Tolkien: The Lord Of The Rings');

        cy.get('#counter-buttons\\+').click();
        cy.get('#counter').contains('2');

        cy.contains('Back To List').click(); // cy.go('back');
        cy.url().should('have.path', "/");
        cy.get('#counter').contains('2');
        cy.contains(`J.R.R. Tolkien${'x'}: The Lord Of The Rings`);
    })
});
