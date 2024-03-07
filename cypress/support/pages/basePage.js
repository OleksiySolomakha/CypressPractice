export class BasePage {

  typeAmount(amount) {
    cy.get('[data-qa-node="amount"]')
      .clear()
      .type(amount)
  }

  typeDebitCardData(cardNumber, expDate, CVV) {
    cy.get('[data-qa-node="numberdebitSource"]')
      .type(cardNumber)
      .get('[data-qa-node="expiredebitSource"]')
      .type(expDate)
      .get('[data-qa-node="cvvdebitSource"]')
      .type(CVV)
  }

  submit() {
    cy.get('button[type="submit"]')
      .click()
  }
}

export const basePage = new BasePage()