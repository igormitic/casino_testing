/// <reference types="cypress" />

const gameData = require('../../../fixtures/dataCrash.json') 
//const gameData = require('../../../fixtures/dataCrash1.json') 
describe('Crash all components Visual test', () => {
  describe(gameData.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    gameData.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
          cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
          cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,gameData.name)
          cy.betButton()
          cy.balanceCurency(currencyObject.value)
          cy.betAmount(currencyObject.value) 
          cy.menu()
          cy.menuCrashCurencyIcon()
          cy.cashoutAt()
          cy.multiplierCalculator()
          cy.balanceCurency(currencyObject.value)
          cy.autoBet()
          cy.autoBetButton()
          cy.betAmount(currencyObject.value) 
          cy.numberOfBets(gameData.name)
          cy.onWin(gameData.name)
          cy.onLoss(gameData.name)
          cy.stopOnProfit(gameData.name)
          cy.stopOnLoss(gameData.name)
        })
    })
  })
})
