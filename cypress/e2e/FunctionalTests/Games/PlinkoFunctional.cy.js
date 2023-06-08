/// <reference types="cypress" />

const gameData = require('../../../fixtures/dataPlinko.json') 
//const gameData = require('../../../fixtures/dataTESTplinko.json') 
describe('Plinko all components Visual test', () => {
  describe(gameData.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    gameData.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
          cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
          cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,gameData.name)
          cy.betAmauntFunctional(currencyObject.select)
        })
    })
  })
})
