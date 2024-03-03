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

  it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents')
    cy.get('.announcementBar_mb4j')
  })

  it.only('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
  })
})