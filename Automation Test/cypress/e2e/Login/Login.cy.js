//import elements from "../../../../support/store-v2/prius/general/elements"
const data = require(`../../fixtures/LoginSet.js`)


describe('Login', function () {
    it('login as buyer', function () {
       cy.Login(data.url, data.buyerEmail, data.buyerPassword)
    })
    
})