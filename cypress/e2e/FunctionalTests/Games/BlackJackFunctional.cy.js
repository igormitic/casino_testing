/// <reference types="cypress" />

//const gameData = require('../../../fixtures/dataBlackJack.json') 
//const gameData = require('../../../fixtures/dataTEST.json') 
const gameData = require('../../../fixtures/data1USD.json') 
//const gameData = require('../../../fixtures/data1DOGE.json') 
describe('BlackJack all components Visual test', () => {
  describe(gameData.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    gameData.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
          cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
          cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,gameData.name)
          cy.betAmauntFunctional(currencyObject.select)
          //cy.balanceAmountFunctional(currencyObject.select, currencyObject.value)
          cy.menuFunctionality()
          
        })
    })
  })
})