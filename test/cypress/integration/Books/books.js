import chaiUrl from 'chai-url'
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

chai.use(chaiUrl);

Given('a book id {int} {string} by {string} recommended at {int}', (id, title, author, recommendedReadingAge) => {
    cy.request('POST', 'http://localhost:8080/books/' + id, {
        "id": id,
        "author": author,
        "title": title,
        "recommendedReadingAge": recommendedReadingAge
    });
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
