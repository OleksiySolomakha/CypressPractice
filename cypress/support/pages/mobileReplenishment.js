export class MobilePhoneReplenishment {
  typePhoneNumber(phoneNumber) {
    cy.get('[data-qa-node="phone-number"]')
      .type(phoneNumber)
  }

  checkDebitCard(debitCard) {
    cy.get('[data-qa-node="card"]')
      .should('have.text', debitCard)
  } 

  checkDebitAmount(amount) {
    cy.get('div[data-qa-node="amount"]')
      .contains(amount + ' UAH')
  }
  checkDebitCommission(commission) {
    cy.get('span[data-qa-node="commission"]')
      .should('have.text', commission)
  }
}

export const mobileReplenishment = new MobilePhoneReplenishment()