export class Transfers {

  typeReceiverCard(cardNumber) {
    cy.get('[data-qa-node="numberreceiver"]')
      .type(cardNumber)
  }

  typeComment(comment) {
    cy.get('[data-qa-node="toggle-comment"]')
      .click()
      .get('[data-qa-node="comment"]')
      .type(comment)
  }

}

export const transfers = new Transfers()