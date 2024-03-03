/// <reference types="cypress" />

// describe('Mobile phone replenishment', () => {

//   it('Check min sum', () => {
//     // some sum
//   })
// })

describe('Login in facebook', () => {

  it('By id', () => {
    cy.visit('https://www.facebook.com/?locale=uk_UA')
    cy.get('#email')
  })
  it.only('By Class', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents')
    cy.get('.announcementBar_mb4j')
  })
})