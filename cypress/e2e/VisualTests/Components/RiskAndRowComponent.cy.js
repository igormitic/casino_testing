/// <reference types="cypress" />

const gameData = require('../../../fixtures/dataCustomGames1.json') 
describe('Bet buttion Visual test', () => {
gameData.forEach(game=>{
 
  describe(game.name , () => {
    beforeEach(() => {
      cy.visit('https://3stage3.catchygames.com/index.html')
    })
    
    game.currency.forEach(currencyObject=>{
    it(currencyObject.select, () => { 
    cy.loginUserPass(Cypress.env('username'),Cypress.env('password'))
    cy.selectCurrencyAndGame(currencyObject.select,currencyObject.value,game.name)
          if(game.name!="Slot"){
            cy.riskDropdown(game.name)
          }
          cy.rowsDropdown(game.name)
        
         
    })
  
  })

})
})
})
