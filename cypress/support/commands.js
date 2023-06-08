const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
compareSnapshotCommand();

Cypress.Commands.add('loginUserPass', (username, password) => {
    cy.log('-----Username and password-----')
    cy.get('#localUsername').type(username)
    cy.get('#localUsername').should('have.value', username)
    
    cy.get('#password').type(password)
    cy.get('#password').should('have.value', password)
})
Cypress.Commands.add('selectCurrencyAndGame', (currencyselect,currencyvalue,gameName) => {
    cy.log('-----Currency and game select-----')
    cy.get('#currency').select(currencyselect).should('have.value', currencyvalue)
    cy.get('#game_name').select(gameName).should('have.value', gameName)
    cy.get('#startGame').should('exist')
    .and('be.visible').click()
    cy.location('pathname').should('include', '/gs')
    cy.wait(2000)
 
})


Cypress.Commands.add('betButton', () => {
    cy.log('-----Bet Button-----')
    cy.get('#bet').should('exist')
    .and('be.visible')
    .and('have.css', 'background-color', 'rgb(0, 242, 126)')
    .and('have.css', 'color', 'rgb(17, 17, 17)')
    .and('have.css', 'font-family', 'InterBold')
    .and('have.css', 'font-size', '16px')
    .contains('BET')
})

Cypress.Commands.add('betAmount', (currencyvalue) => {
    cy.log('-----Bet Amount-----')
    cy.get('#betAmountWrapper').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')
    .and('have.css', 'border-radius', '8px 8px 0px 0px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')

    cy.get('.bet_flex_child_2 > .info_label:visible').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('Bet Amount')

    cy.get('#betAmount').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    
    cy.get('#currency-text').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .contains(currencyvalue)

    cy.get('#currency-icon').should('exist')
    .and('be.visible')
    .and('have.prop', 'naturalWidth')
    .should('be.gte', 20)

    cy.get('[data-id="betAmountWrapper"]:visible').should('exist')
    .and('be.visible')

    cy.get('#halfValueButton').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    .and('have.css', 'border-radius', '0px 0px 0px 8px')
    .contains('1/2')

    cy.get('#doubleValueButton').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    .and('have.css', 'border-radius', '0px 0px 8px')
    .contains('x2')

})

Cypress.Commands.add('menu', () => {
    cy.log('-----Menu-----')
    cy.get('#settings').should('be.visible')
    cy.get('#settings > .rounded_parent > .settings').should('exist')
    .and('have.css', 'background-position', '8px 50%')
    cy.get('#settings > .text11').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '11px')
    .contains('Settings')

    cy.get('#rules').should('be.visible')
    cy.get('#rules > .rounded_parent > .rules').should('exist')
    .and('have.css', 'background-position', '50% 50%')
    cy.get('#rules > .text11').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '11px')
    .contains('Rules')

    cy.get('#hotkeys').should('be.visible')
    cy.get('#hotkeys > .rounded_parent > .hotkeys').should('exist')
    .and('have.css', 'background-position', '50% 50%')
    cy.get('#hotkeys > .text11').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '11px')
    .contains('Hotkeys')

    cy.get('#liveStats').should('be.visible')
    cy.get('#liveStats > .rounded_parent > .live_stats').should('exist')
    .and('have.css', 'background-position', '50% 50%')
    cy.get('#liveStats > .text11').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '11px')
    .contains('Live Stats')

    cy.get('#historyBets').should('be.visible')
    cy.get('#historyBets > .rounded_parent > .history').should('exist')
    .and('have.css', 'background-position', '50% 50%')
    cy.get('#historyBets > .text11').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '11px')
    .contains('History')

    cy.get('#fairness').should('be.visible')
    cy.get('#fairness > .rounded_parent > .fairness').should('exist')
    .and('have.css', 'background-position', '50% 50%')
    cy.get('#fairness > .text11').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '11px')
    .contains('Fairness')

})

Cypress.Commands.add('menuHokeysResponsive', () => {
    cy.log('-----Menu responsive-----')
    cy.get('#hotkeys').should('exist')
    .and('have.css', 'display', 'none')
    cy.get('#settings').should('be.visible')
    cy.get('#rules').should('be.visible')
    cy.get('#liveStats').should('be.visible')
    cy.get('#fairness').should('be.visible')
})
Cypress.Commands.add('menuCurencyIcon', (gamename) => {
    cy.log('-----Menu icon-----')
    if(gamename !="Wheel"){
        cy.get('#settings > .rounded_parent > .settings')
    .should('have.css', 'background-image','-webkit-image-set(url("https://3stage3.catchygames.com/assets/settings@1x.png") 1x, url("https://3stage3.catchygames.com/assets/settings@2x.png") 2x, url("https://3stage3.catchygames.com/assets/settings@3x.png") 3x, url("https://3stage3.catchygames.com/assets/settings@4x.png") 4x)')

    cy.get('#rules > .rounded_parent > .rules')
    .should('have.css', 'background-image','-webkit-image-set(url("https://3stage3.catchygames.com/assets/rules@1x.png") 1x, url("https://3stage3.catchygames.com/assets/rules@2x.png") 2x, url("https://3stage3.catchygames.com/assets/rules@3x.png") 3x, url("https://3stage3.catchygames.com/assets/rules@4x.png") 4x)')
   
    cy.get('#hotkeys > .rounded_parent > .hotkeys')
    .should('have.css', 'background-image','-webkit-image-set(url("https://3stage3.catchygames.com/assets/hotkeys@1x.png") 1x, url("https://3stage3.catchygames.com/assets/hotkeys@2x.png") 2x, url("https://3stage3.catchygames.com/assets/hotkeys@3x.png") 3x, url("https://3stage3.catchygames.com/assets/hotkeys@4x.png") 4x)')

    cy.get('#liveStats > .rounded_parent > .live_stats')
    .should('have.css', 'background-image','-webkit-image-set(url("https://3stage3.catchygames.com/assets/live_stats@1x.png") 1x, url("https://3stage3.catchygames.com/assets/live_stats@2x.png") 2x, url("https://3stage3.catchygames.com/assets/live_stats@3x.png") 3x, url("https://3stage3.catchygames.com/assets/live_stats@4x.png") 4x)')

    cy.get('#historyBets > .rounded_parent > .history')
    .should('have.css', 'background-image','url("https://3stage3.catchygames.com/assets/history.svg")')

    cy.get('#fairness > .rounded_parent > .fairness')
    .should('have.css', 'background-image','-webkit-image-set(url("https://3stage3.catchygames.com/assets/fairness@1x.png") 1x, url("https://3stage3.catchygames.com/assets/fairness@2x.png") 2x, url("https://3stage3.catchygames.com/assets/fairness@3x.png") 3x, url("https://3stage3.catchygames.com/assets/fairness@4x.png") 4x)')
    }
    else{
        cy.get('#settings > .rounded_parent > .settings')
        .should('have.css', 'background-image','-webkit-image-set(url("https://wheel.3stage3.catchygames.com/assets/settings@1x.png") 1x, url("https://wheel.3stage3.catchygames.com/assets/settings@2x.png") 2x, url("https://wheel.3stage3.catchygames.com/assets/settings@3x.png") 3x, url("https://wheel.3stage3.catchygames.com/assets/settings@4x.png") 4x)')
    
        cy.get('#rules > .rounded_parent > .rules')
        .should('have.css', 'background-image','-webkit-image-set(url("https://wheel.3stage3.catchygames.com/assets/rules@1x.png") 1x, url("https://wheel.3stage3.catchygames.com/assets/rules@2x.png") 2x, url("https://wheel.3stage3.catchygames.com/assets/rules@3x.png") 3x, url("https://wheel.3stage3.catchygames.com/assets/rules@4x.png") 4x)')
       
        cy.get('#hotkeys > .rounded_parent > .hotkeys')
        .should('have.css', 'background-image','-webkit-image-set(url("https://wheel.3stage3.catchygames.com/assets/hotkeys@1x.png") 1x, url("https://wheel.3stage3.catchygames.com/assets/hotkeys@2x.png") 2x, url("https://wheel.3stage3.catchygames.com/assets/hotkeys@3x.png") 3x, url("https://wheel.3stage3.catchygames.com/assets/hotkeys@4x.png") 4x)')
    
        cy.get('#liveStats > .rounded_parent > .live_stats')
        .should('have.css', 'background-image','-webkit-image-set(url("https://wheel.3stage3.catchygames.com/assets/live_stats@1x.png") 1x, url("https://wheel.3stage3.catchygames.com/assets/live_stats@2x.png") 2x, url("https://wheel.3stage3.catchygames.com/assets/live_stats@3x.png") 3x, url("https://wheel.3stage3.catchygames.com/assets/live_stats@4x.png") 4x)')
    
        cy.get('#historyBets > .rounded_parent > .history')
        .should('have.css', 'background-image','url("https://wheel.3stage3.catchygames.com/assets/history.svg")')
    
        cy.get('#fairness > .rounded_parent > .fairness')
        .should('have.css', 'background-image','-webkit-image-set(url("https://wheel.3stage3.catchygames.com/assets/fairness@1x.png") 1x, url("https://wheel.3stage3.catchygames.com/assets/fairness@2x.png") 2x, url("https://wheel.3stage3.catchygames.com/assets/fairness@3x.png") 3x, url("https://wheel.3stage3.catchygames.com/assets/fairness@4x.png") 4x)')
    }
    
  
})
Cypress.Commands.add('menuCrashCurencyIcon', () => {
    cy.log('-----Menu icon Crash-----')
    cy.get('#settings > .rounded_parent > .settings')
    .should('have.css', 'background-image','-webkit-image-set(url("https://crash.3stage3.catchygames.com/assets/settings@1x.png") 1x, url("https://crash.3stage3.catchygames.com/assets/settings@2x.png") 2x, url("https://crash.3stage3.catchygames.com/assets/settings@3x.png") 3x, url("https://crash.3stage3.catchygames.com/assets/settings@4x.png") 4x)')

    cy.get('#rules > .rounded_parent > .rules')
    .should('have.css', 'background-image','-webkit-image-set(url("https://crash.3stage3.catchygames.com/assets/rules@1x.png") 1x, url("https://crash.3stage3.catchygames.com/assets/rules@2x.png") 2x, url("https://crash.3stage3.catchygames.com/assets/rules@3x.png") 3x, url("https://crash.3stage3.catchygames.com/assets/rules@4x.png") 4x)')
   
    cy.get('#hotkeys > .rounded_parent > .hotkeys')
    .should('have.css', 'background-image','-webkit-image-set(url("https://crash.3stage3.catchygames.com/assets/hotkeys@1x.png") 1x, url("https://crash.3stage3.catchygames.com/assets/hotkeys@2x.png") 2x, url("https://crash.3stage3.catchygames.com/assets/hotkeys@3x.png") 3x, url("https://crash.3stage3.catchygames.com/assets/hotkeys@4x.png") 4x)')

    cy.get('#liveStats > .rounded_parent > .live_stats')
    .should('have.css', 'background-image','-webkit-image-set(url("https://crash.3stage3.catchygames.com/assets/live_stats@1x.png") 1x, url("https://crash.3stage3.catchygames.com/assets/live_stats@2x.png") 2x, url("https://crash.3stage3.catchygames.com/assets/live_stats@3x.png") 3x, url("https://crash.3stage3.catchygames.com/assets/live_stats@4x.png") 4x)')

    cy.get('#historyBets > .rounded_parent > .history')
    .should('have.css', 'background-image','url("https://crash.3stage3.catchygames.com/assets/history.svg")')

    cy.get('#fairness > .rounded_parent > .fairness')
    .should('have.css', 'background-image','-webkit-image-set(url("https://crash.3stage3.catchygames.com/assets/fairness@1x.png") 1x, url("https://crash.3stage3.catchygames.com/assets/fairness@2x.png") 2x, url("https://crash.3stage3.catchygames.com/assets/fairness@3x.png") 3x, url("https://crash.3stage3.catchygames.com/assets/fairness@4x.png") 4x)')
})

Cypress.Commands.add('riskDropdown', (gamename) => {
    cy.log('-----Risk drop down-----')
    if(gamename==='Plinko'){
    cy.get('.plinko_risk_rows_flex_child_1 > .info_label').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'border', '0px none rgb(151, 149, 162)')
    .contains('Risk')
    
    }
    else if(gamename==='Wheel'){
        cy.get('.wheel_risk_seg_flex_child_1 > .info_label').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(151, 149, 162)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '14px')
        .contains('Risk')
    }
   
   

    cy.get('#risk').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular, Arial')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
      
    cy.get('#risk').children('option').then(options => {
        const actual = [...options].map(o => o.value)
        expect(actual).to.deep.eq(['Easy', 'Medium', 'Hard'])
      })
    
   
      
})

Cypress.Commands.add('rowsDropdown', (gamename) => {
    cy.log('-----Rows drop down-----')
    if(gamename==='Plinko'){
    cy.get('.plinko_risk_rows_flex_child_2 > .info_label').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('Rows')

    cy.get('#rows').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular, Arial')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
    

    cy.get('#rows').children('option').then(options => {
        const actual = [...options].map(o => o.value)
        expect(actual).to.deep.eq(['8', '9', '10','11','12','13','14','15','16'])
      })
    }
    else if (gamename==='Wheel'){
        cy.get('.wheel_risk_seg_flex_child_2 > .info_label').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(151, 149, 162)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '14px')
        .contains('Segments')

        cy.get('#segments').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular, Arial')
        .and('have.css', 'font-size', '16px')
    
        cy.get('#segments').children('option').then(options => {
            const actual = [...options].map(o => o.value)
            expect(actual).to.deep.eq(['10','20','30','40','50'])
          })
    }
    else{
        cy.get('.left_menu_flex_container > :nth-child(3)').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(151, 149, 162)')
        .and('have.css', 'font-family', 'InterRegular')

        .and('have.css', 'font-size', '14px')
        .contains('Lines')

        cy.get('#lines').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular, Arial')
        .and('have.css', 'font-size', '16px')
    
        cy.get('#lines').children('option').then(options => {
            const actual = [...options].map(o => o.value)
            expect(actual).to.deep.eq(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])
          })

    }

   
      
})

Cypress.Commands.add('profitOnWin', (currencyvalue, gamename) => {
    cy.log('-----Profit on win-----')
    cy.get('#manual > :nth-child(1)').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    if(gamename=='Plinko' || gamename=='Limbo'){
        cy.get('#manual > :nth-child(1)').contains('Profit On Win')

        cy.get('#manual > .profit-input-wrapper').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')

        cy.get('#profitOnWin').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '16px')

        cy.get('#currency-text-profit').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(189, 192, 197)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '16px')
        .contains(currencyvalue)

        cy.get('#currency-icon-profit').should('exist')
        .and('be.visible')
        .and('have.prop', 'naturalWidth')
        .should('be.gte', 20)
    }
    else if(gamename=='Slot'){
        cy.get('#manual > :nth-child(1)').contains('Bet Amount Per Line')

        cy.get('#manual > .per-line-input-wrapper').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')

        cy.get('#betPerLine').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '16px')

        cy.get('#currency-text-line').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '16px')
        .contains(currencyvalue)

        cy.get('#currency-icon-line').should('exist')
        .and('be.visible')
        .and('have.prop', 'naturalWidth')
        .should('be.gte', 20)
    }
    
    

})

Cypress.Commands.add('cashoutAt', () => {
    cy.log('-----Cashout At-----')
    cy.get('#manualCashoutView > .info_label').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('Cashout At')

    cy.get('#manual_cashout').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')

    cy.get('[data-id="manual_cashout"]').should('exist')
    .and('be.visible')

})

Cypress.Commands.add('multiplierCalculator', () => {
    cy.log('-----Multiplier Calculator-----')
    cy.get('#manual > .info_label').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('Multiplier Calculator')

    cy.get('#manual_total_payout').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')

    cy.log('-----Leaderboard-----')
    cy.get('#leaderboard').should('exist')
    .and('be.visible')


})

Cypress.Commands.add('balanceCurency', (curency) => {
    cy.log('-----Balance Curency-----')
    cy.get('#balanceAmount').should('exist')
    .and('be.visible')
    .contains(curency)
})


Cypress.Commands.add('autoBet', () => {
    cy.log('-----Auto Bet-----')
    cy.get('#autoButton').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    .click()
    .and('have.class', 'dark_button' )
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')
    .contains('Auto')
    
})

Cypress.Commands.add('autoBetButton', () => {
    cy.log('----- Autobet Button-----')
    cy.get('#bet').should('exist')
    .and('be.visible')
    .and('have.css', 'background-color', 'rgb(0, 242, 126)')
    .and('have.css', 'color', 'rgb(17, 17, 17)')
    .and('have.css', 'font-family', 'InterBold')
    .and('have.css', 'font-size', '16px')
    .contains('START AUTOBET')
})

Cypress.Commands.add('numberOfBets', (gamename) => {
    cy.log('-----Number of bets-----')
    if(gamename != "Crash"){
        cy.get('#autoBet > .info_label').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(151, 149, 162)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '14px')
        .contains('Number Of Bets')
    }
    else{
        cy.get('.left_right_action_wrapper > .right_action_button > .info_label').should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(151, 149, 162)')
        .and('have.css', 'font-family', 'InterRegular')
        .and('have.css', 'font-size', '14px')
        .contains('Number Of Bets')
    }
  

    cy.get('#numberOfBets').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
    
    cy.get('[data-id="numberOfBets"]:visible').should('exist')
    .and('be.visible')
})

Cypress.Commands.add('onWin', (gamename) => {
    cy.log('-----On win-----')
    if(gamename==="Plinko"  ){
    cy.get('.left_div_menu_container').scrollTo('bottom')
    }
    if(gamename==="Crash" ){
    cy.get('.left_div_menu_container').scrollTo('bottom')
    cy.get('#controls > :nth-child(2)').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('On Win')
    }
    else{
    cy.get('#autoBet > :nth-child(3)').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
     .and('have.css', 'font-size', '14px')
    .contains('On Win')

        
    }

    cy.get('#onWinReset').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
    .contains('Reset')
    cy.get('#onWinInc').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    .contains('Increase by')
    cy.get('#onWinPercentage ').should('exist')
    .and('be.visible')
    .contains('%')
    cy.get('[data-id="onWin"]:visible').should('exist')
    .and('be.visible')
  
 
    
})

Cypress.Commands.add('onLoss', (gamename) => {
    cy.log('-----On Loss-----')
    if(gamename==="Plinko"  ){
    cy.get('.left_div_menu_container').scrollTo('bottom')
    }
    if(gamename==="Crash" ){
    cy.get('.left_div_menu_container').scrollTo('bottom')
    cy.get('#controls > :nth-child(4)').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('On Loss')
    }
    else{
    cy.get('#autoBet > :nth-child(5)').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .contains('On Loss')
        
    }

    cy.get('#onLossReset').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
    .contains('Reset')
    cy.get('#onLossInc').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    .contains('Increase by')
    cy.get('#onLossPercentage ').should('exist')
    .and('be.visible')
    .contains('%')
    cy.get('[data-id="onLoss"]:visible').should('exist')
    .and('be.visible')
    
})

Cypress.Commands.add('stopOnProfit', (gamename) => {
    cy.log('-----Stop on profit-----')
    if(gamename==="Plinko"  || gamename==="Wheel"){
        cy.get('.left_div_menu_container').scrollTo('bottom')
    }

    cy.get('.left_action_button > .info_label').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .contains('Stop On Profit')
    cy.get('#stopOnProfit').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')
    .and('have.css', 'border-radius', '8px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
    cy.get('[data-id="stopOnProfit"]:visible').should('exist')
    .and('be.visible')

})

Cypress.Commands.add('stopOnLoss', (gamename) => {
    cy.log('-----Stop on loss-----')
    if(gamename==="Plinko"  || gamename==="Wheel"){
        cy.get('.left_div_menu_container').scrollTo('bottom')
    }

    cy.get('.right_action_button > .info_label').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'color', 'rgb(151, 149, 162)')
    .and('have.css', 'font-family', 'InterRegular')
    .contains('Stop On Loss')
    cy.get('#stopOnLoss').should('exist')
    .and('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-family', 'InterRegular')
    .and('have.css', 'font-size', '16px')
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0.25)')
    .and('have.css', 'border-radius', '8px')
    .and('have.css', 'border', '0.5px solid rgba(255, 255, 255, 0.08)')
    cy.get('[data-id="stopOnLoss"]:visible').should('exist')
    .and('be.visible')
   
 
})


Cypress.Commands.add('betAmauntFunctional', (curencyName) => {
    cy.log('-----Bet amaunt functional-----')
    //FunFair je skipan jer ne radi
    if(curencyName != "FunFair"){
    let startAmount = 0
    let stepAmaunt = 0
    
    if(curencyName === "Japanese Yen"){
        startAmount = 10
        stepAmaunt = 2
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else if(curencyName === "Dogecoin"){                 

        startAmount = 0.00004
        stepAmaunt =  0.00000002
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else if(curencyName === "Etherium"){                 

        startAmount = 1.000
        stepAmaunt = 0.002
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else if(curencyName === "Tether"){                 

        startAmount = 0.0001
        stepAmaunt =  0.00000002
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else{
        startAmount = 1.00
        stepAmaunt = 0.02
        cy.get('#betAmount').clear()
        .type(startAmount)
        
    }

    cy.get('#halfValueButton').click()
    if(curencyName === "Japanese Yen" ){
        cy.get('#betAmount').should('have.value', (startAmount/2))
    }
    else if(curencyName === "Dogecoin" || curencyName === "Tether"){
        cy.get('#betAmount').should('have.value', (startAmount/2).toFixed(8))
    }
    else if(curencyName === "Etherium" ){
        cy.get('#betAmount').should('have.value', (startAmount/2).toFixed(3))
    }
    else{
        cy.get('#betAmount').should('have.value', (startAmount/2).toFixed(2))
    }
    
    cy.get('#doubleValueButton').click()
    if(curencyName === "Japanese Yen" ){
        cy.get('#betAmount').should('have.value', startAmount)
    }
    else if(curencyName === "Dogecoin" || curencyName === "Tether"){
        cy.get('#betAmount').should('have.value', startAmount.toFixed(8))
    }
    else if(curencyName === "Etherium" ){
        cy.get('#betAmount').should('have.value', startAmount.toFixed(3))
    }
    else{
        cy.get('#betAmount').should('have.value', startAmount.toFixed(2))
    }
    

    let number1 =0;  
    cy.get('#betAmount').invoke('val').then(text => {
        number1 = text;
        cy.log(number1);
            });
    cy.get('[data-id="betAmountWrapper"]').next().should('have.attr', 'alt', 'plus-minus-controls').dblclick({force: true})
        cy.get('#betAmount').invoke('val').then(text => {
        expect(parseFloat(text)).to.be.eq(parseFloat(number1-stepAmaunt))
            });
    cy.get('#currency-icon').next().should('have.class', 'buttons-firefox').dblclick({force: true})
    cy.get('#betAmount').invoke('val').then(text => {
        expect(parseFloat(text)).to.be.eq(parseFloat(number1))
            });


        }
        else{
            cy.log('FunFair is skipped because it doesnt work')
        }
    
})

Cypress.Commands.add('balanceAmountFunctional', (curencyName, curency, gamename) => {
    cy.log('-----Balance amaunt functionak-----')
    let text1 = "";
    let text2 = "";

    
   
    //declineInsuranceButton
if(curencyName != "FunFair"){                  
    let startAmount = 0
  
    
    if(curencyName === "Japanese Yen"){
        startAmount = 10
     
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else if(curencyName === "Dogecoin"){                 

        startAmount = 0.00002
        
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else if(curencyName === "Etherium"){                 

        startAmount = 1.000
        
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else if(curencyName === "Tether"){                 

        startAmount = 0.0001
        
        cy.get('#betAmount').clear()
        .type(startAmount)
    }
    else{
        startAmount = 1.00
       
        cy.get('#betAmount').clear()
        .type(startAmount)
        
    }
    
    cy.get('#balanceAmount').then(($div) => {
        text1 = $div.text()
        cy.log(text1)
        text1 = text1.replace(" "+curency, "")
    });
   cy.get('#bet').click()
    cy.wait(1000)
    /*
    if(cy.get('#insurance').should('have.css', 'display', 'none')){
        cy.get('#standButton').should('be.visible').click()
    }
    else{
        cy.get('#declineInsuranceButton').should('be.visible').click()
        cy.get('#standButton').should('be.visible').click()
    }
    */

    if(gamename === "Blackjack"){

        try {
            cy.get('#insurance').should('have.css', 'display', 'none')
            cy.get('#standButton').should('be.visible').click()
          }
          catch(err) {
    
            cy.get('#declineInsuranceButton').should('be.visible').click()
            cy.get('#standButton').should('be.visible').click()
          }
    }
    
       
    cy.get('#balanceAmount').then(($div) => {
        text2 = $div.text()
        text2 = text2.replace(" "+curency, "")
        cy.log(text2)
        expect(parseFloat(text2)).to.be.eq(parseFloat(text1-startAmount))
    });
    
 
  


    }
    else{
        cy.log('FunFair is skipped because it doesnt work')
    }
})


Cypress.Commands.add('stand', () => {

    cy.get('#standButton').click().should('not.be.visible')

})

Cypress.Commands.add('menuFunctionality', () => {
    cy.log('-----Menu functionality-----')
    cy.get('#settings').should('be.visible').click()
    cy.get('#popupSetting').should('be.visible')
    cy.get('#rules').should('be.visible').click()
    cy.get('.rules_dialog_content').should('be.visible')
    cy.get('#closeDialog').click()
    cy.get('#hotkeys').should('be.visible').click()
    cy.get('.hotkeys_dialog_content').should('be.visible')
    cy.get('#closeDialog').click()
    cy.get('#liveStats').should('be.visible').click()
    cy.wait(1000)
    cy.get('.live_stats_dialog_content').should('be.visible')
    cy.get('#closeDialog').click()
    cy.get('#historyBets').should('be.visible').click()
    cy.get('#dialogContent > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get('#closeDialog').click()
    cy.get('#fairness').should('be.visible').click()
    cy.get('#dialogContent').should('be.visible')
    cy.get('#verifyNav').click()
    cy.get('#verify_group').should('be.visible')
    cy.get('#closeDialog').click()
})

Cypress.Commands.add('betMinimalAmauntFunctional', () => {
    cy.get('#betAmount').clear()
    .type(0)

})



Cypress.Commands.add('cashoutAtFunctional', () => {
    cy.log('-----Cashout at functional-----')
    
    cy.get('#auto_cashout').clear().type('9.00{enter}')
    cy.get('#auto_cashout').should('have.value', '9.00')
    cy.get('#auto_cashout').blur()
    cy.get('[data-id="auto_cashout"]').first().click()
    cy.get('#auto_cashout').should('have.value', '10.00')
    cy.get('[data-id="auto_cashout"]').last().click({force: true})
    cy.get('#auto_cashout').should('have.value', '9.00')

})

Cypress.Commands.add('numberOfBetsFunctional', () => {
    cy.log('-----Number of bets-----')
    cy.get('#numberOfBets').clear().type(3)
    cy.get('#numberOfBets').should('have.value', '3')
    
    cy.get('[data-id="numberOfBets"]').first().click()
    cy.get('#numberOfBets').should('have.value', '4')
    cy.get('[data-id="numberOfBets"]').last().click({force: true})
    cy.get('#numberOfBets').should('have.value', '3')

})

Cypress.Commands.add('onWinOnLossFunctional', () => {
    cy.log('-----On win on loss functional-----')
    
    cy.get('#onWinInc').click()
    cy.get('#onWinReset').should('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    cy.get('#onWin').clear().type(28)
    cy.get('[data-id="onWin"]').first().click()
    cy.get('#onWin').should('have.value', '29')
    cy.get('[data-id="onWin"]').last().click({force: true})
    cy.get('#onWin').should('have.value', '28')

    cy.get('#onLossInc').click()
    cy.get('#onLossReset').should('have.css', 'background-color', 'rgba(255, 255, 255, 0.2)')
    cy.get('#onLoss').clear().type(150)
    cy.get('[data-id="onLoss"]').first().click()
    cy.get('#onLoss').should('have.value', '151')
    cy.get('[data-id="onLoss"]').last().click({force: true})
    cy.get('#onLoss').should('have.value', '150')

})


Cypress.Commands.add('stopOnProfitFunctional', (curencyName) => {
    cy.log('-----Stop on profit-----')

    cy.get('#stopOnProfit').clear().type(77)
    cy.get('#stopOnProfit').should('have.value', '77')
    
    if(curencyName =='Japanese Yen'){
         //skiped because yen +/- is not working in incognito mode
       // cy.get('[data-id="stopOnProfit"]').first().click()
        //cy.get('#stopOnProfit').should('have.value', '78')
    }
    else if(curencyName =='Dogecoin' || curencyName =='Tether'){
        cy.get('[data-id="stopOnProfit"]').first().click()
        cy.get('#stopOnProfit').should('have.value', '77.01000000')
    }
    else if(curencyName =='Etherium'){
        cy.get('[data-id="stopOnProfit"]').first().click()
        cy.get('#stopOnProfit').should('have.value', '77.010')
    }
    else{

        cy.get('[data-id="stopOnProfit"]').first().click()
        cy.get('#stopOnProfit').should('have.value', '77.01')
   
      
    }
    cy.get('[data-id="stopOnProfit"]').last().click({force: true})

    if(curencyName =='Japanese Yen'){
        //skiped because yen +/- is not working in incognito mode
        ///cy.get('#stopOnProfit').should('have.value', '77')
    }
    else if(curencyName =='Dogecoin' || curencyName =='Tether'){
        cy.get('#stopOnProfit').should('have.value', '77.00000000')
    }
    else if(curencyName =='Etherium'){
       
        cy.get('#stopOnProfit').should('have.value', '77.000')
    }
    else{
     
        cy.get('#stopOnProfit').should('have.value', '77.00')
    }
  
})

Cypress.Commands.add('stopOnLossFunctional', (curencyName) => {
    
    cy.log('-----Stop on loss functional-----')
    cy.get('#stopOnLoss').clear().type(55)
    cy.get('#stopOnLoss').should('have.value', '55')
    cy.get('[data-id="stopOnLoss"]').first().click()
    if(curencyName =='Japanese Yen'){
        //skiped because yen +/- is not working in incognito mode
        //cy.get('[data-id="stopOnLoss"]').first().click({force: true})
        //cy.get('#stopOnLoss').should('have.value', '56')
      
    }
    else if(curencyName =='Dogecoin' || curencyName =='Tether'){
        
        cy.get('#stopOnLoss').should('have.value', '55.01000000')
      
    }
    else if(curencyName =='Etherium'){
        cy.get('#stopOnLoss').should('have.value', '55.010')
        
    }
    else{
        
    
        cy.get('#stopOnLoss').should('have.value', '55.01')
    }

    cy.get('[data-id="stopOnLoss"]').last().click({force: true})

    if(curencyName=='Japanese Yen'){
         //skiped because yen +/- is not working in incognito mode
       // cy.get('#stopOnLoss').should('have.value', '55')
       //Tether
    }
    else if(curencyName =='Dogecoin' || curencyName =='Tether'){
        cy.get('#stopOnLoss').should('have.value', '55.00000000')
        
    }
    else if(curencyName =='Etherium'){
        cy.get('#stopOnLoss').should('have.value', '55.000')
        
    }
    else{
       
       cy.get('#stopOnLoss').should('have.value', '55.00')
    }
  

})


Cypress.Commands.add('MultiplyerRolloverWinChance', (gameName,currencyvalue) => {

   cy.get('#payout').clear().type(4.9)

   cy.wait(4000)
   cy.get('#gameParent').compareSnapshot(gameName+currencyvalue+'1');
   cy.get('#payout').should('have.value', '4.9')
   cy.get('#rollOverUnderButton').contains('80.00')
   cy.get('#winChance').should('have.value', '20')
   cy.get('#rollOverUnderButton').click()

  cy.get('#gameParent').compareSnapshot(gameName+currencyvalue+'2');
   cy.get('#rollOverUnderButton').contains('20.00')
   cy.get('#winChanceInc').click()

   cy.get('#gameParent').compareSnapshot(gameName+currencyvalue+'3');
   cy.get('#winChance').should('have.value', '25')
   cy.get('#rollOverUnderButton').contains('25.00')
   cy.get('#payout').should('have.value', '3.92')
   
})