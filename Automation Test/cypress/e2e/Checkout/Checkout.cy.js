const data = require(`../../fixtures/LoginSet.js`)


describe('Login', function () {
    beforeEach('login as buyer', function () {
       cy.Login(data.url, data.buyerEmail, data.buyerPassword)
    })

    it('CheckOut', function() {
        cy.CheckOut(data.DataBuyer)
    })
    
})