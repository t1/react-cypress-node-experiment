import chaiUrl from 'chai-url'
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

chai.use(chaiUrl);

let books = [];

Given('the following books:', (table) => {
    const hashes = table.hashes();
    for (let hash of hashes)
        books[hash.id] = {
            "id": hash.id,
            "author": hash.author,
            "title": hash.title,
            "recommendedReadingAge": hash.recommendedReadingAge
        };
    cy.request('PUT', 'http://localhost:8080/books/', hashes);
});

When('I click on counter-up', () => {
    cy.get('#counter-buttons\\+').click();
});

Then('the counter is {int}', (counter) => {
    cy.get('#counter').contains(counter);
});

Then('it contains the book {string}', (bookTitle) => {
    cy.contains(bookTitle);
});

When('I click on book-up {int}', (bookNumber) => {
    cy.get(`#book-${bookNumber}\\+`).click();
});

Then("I'm on book id {int}", (bookId) => {
    cy.url().should('have.path', '/books/' + bookId);
    const book = books[bookId];
    cy.contains(`${book.author}: ${book.title}`);
    cy.contains(`Recommended reading age: ${book.recommendedReadingAge}+`)
});
