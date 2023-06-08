/// <reference types="cypress" />

//const gameData = require('../../../fixtures/dataDice.json') 
const gameData = require('../../../fixtures/dataTESTdice.json') 
//const gameData = require('../../../fixtures/dataDice1yen.json') 
describe('Dice all components Visual test', () => {
  describe(gameData.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
 
    })
    gameData.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
          cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
          cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,gameData.name)
          //cy.betAmauntFunctional(currencyObject.select)
          //cy.autoBet()
          //cy.stopOnProfitFunctional(currencyObject.select)
         //cy.stopOnLossFunctional(currencyObject.select)
         cy.MultiplyerRolloverWinChance(gameData.name, currencyObject.value)
        })
    })
  })
})