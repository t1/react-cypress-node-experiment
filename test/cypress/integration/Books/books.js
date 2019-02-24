import chaiUrl from 'chai-url'
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

chai.use(chaiUrl);

let books = [];

Given('a book id {int} {string} by {string} recommended at {int}', (id, title, author, recommendedReadingAge) => {
    const book = {
        "id": id,
        "author": author,
        "title": title,
        "recommendedReadingAge": recommendedReadingAge
    };
    books[id] = book;
    cy.request('POST', 'http://localhost:8080/books/' + id, book);
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
