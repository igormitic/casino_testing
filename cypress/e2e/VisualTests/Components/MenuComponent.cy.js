/// <reference types="cypress" />

const gameData = require('../../../fixtures/dataAllGames.json') 
//const gameData = require('../../../fixtures/dataTEST2Games.json') 
describe('Menu Visual test', () => {
gameData.forEach(game=>{
  describe(game.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    game.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
    cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
    cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,game.name)
    cy.menu()
        if(game.name!='Crash'){
          cy.menuCurencyIcon(game.name)
          }
          else{
          cy.menuCrashCurencyIcon()
          }
    })
  })
})
})



})
