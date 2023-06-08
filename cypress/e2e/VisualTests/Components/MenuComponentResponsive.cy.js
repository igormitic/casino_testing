/// <reference types="cypress" />

const gameData = require('../../../fixtures/dataAllGames.json') 
describe('Menu responsive buttion Visual test', () => {
gameData.forEach(game=>{
  describe(game.name , () => {
    beforeEach(() => {
       cy.viewport(390, 844)
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    game.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
    cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
    cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,game.name)
    cy.menuHokeysResponsive()
    })
  })
})
})



})
