/// <reference types="cypress" />

//const gameData = require('../../../fixtures/dataCrash.json') 
//const gameData = require('../../../fixtures/dataCrash1.json') 
const gameData = require('../../../fixtures/dataCrash1yen.json') 
describe('Crash all components Visual test', () => {
  describe(gameData.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    gameData.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
          cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
          cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,gameData.name)
          //cy.betAmauntFunctional(currencyObject.select)
          //cy.menuFunctionality()
          cy.autoBet()
         // cy.betAmauntFunctional(currencyObject.select)
         //cy.cashoutAtFunctional()
         //cy.numberOfBetsFunctional()
         //cy.onWinOnLossFunctional()
         cy.stopOnProfitFunctional(currencyObject.select)
         cy.stopOnLossFunctional(currencyObject.select)
        })
    })
  })
})
