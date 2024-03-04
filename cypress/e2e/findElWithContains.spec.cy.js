/// <reference types="cypress" />

it('Contains check', () => {
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.contains('Sign in')
})

it('Contains check with tag', () => {
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.contains('div', 'Sign in')
})

it('Contains check with ignoring register', () => {
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.contains('SIGN IN', {matchCase: false})
})