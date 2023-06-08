/// <reference types="cypress" />

//const gameData = require('../../../fixtures/dataAllGames.json') 
const gameData = require('../../../fixtures/dataTESTGames1curency.json') 
describe('Bet amount Visual test', () => {
gameData.forEach(game=>{
  describe(game.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    game.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
      cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
      cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,game.name)
      //cy.balanceAmountFunctional(currencyObject.select, currencyObject.value, game.name)
       //cy.stand()
    })
  })
})
})



})
