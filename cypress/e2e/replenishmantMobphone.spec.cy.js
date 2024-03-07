/// <reference types="cypress" />

import { basePage } from "../support/pages/basePage"
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"

it.only('Replenishment of Ukraine mobile phone number', () => {
  cy.visit('https://next.privat24.ua/mobile?lang=en')
    
  mobileReplenishment.typePhoneNumber('931399680')
  basePage.typeAmount('1') 
  basePage.typeDebitCardData('4552331448138217', '0524','111')

  basePage.submit()

  mobileReplenishment.checkDebitCard('4552 **** **** 8217')
  mobileReplenishment.checkDebitAmount('1')
  mobileReplenishment.checkDebitCommission('2')
})

it('Replenishment of Ukraine mobile phone number', () => {
  cy.visit('https://next.privat24.ua/money-transfer/card')

  basePage.typeDebitCardData('4552331448138217', '0524', '111')
  transfers.typeReceiverCard('5309233034765085')
  basePage.typeAmount('300')
  transfers.typeComment('Cypress test')
  
  basePage.submit()
})