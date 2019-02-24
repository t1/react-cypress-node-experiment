import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

When('I go home', () => {
    cy.visit('/');
});

Then('I\'m home', () => {
    cy.url().should('have.path', "/");
});

Given('I\'m on {string}', (path) => {
    cy.url().should('have.path', path);
});

When('I click on {string}', (selector) => {
    cy.contains(selector).click();
});
