import elements from "./elements.js"

Cypress.Commands.add('Login', (url, email, password) => {
    cy.visit(url)
    cy.get(elements.LoginPage_InputEmail).should('be.visible').type(email)
    cy.get(elements.LoginPage_InputPassword).should('be.visible').type(password)
    cy.contains('Login').click()

})

Cypress.Commands.add('CheckOut', (data) => {
    cy.get(elements.TasSauceLab).should('be.visible').click()
    cy.get(elements.ButtonCart).should('be.visible').click()
    cy.get(elements.ButtonCheckout).should('be.visible').click()
    cy.get(elements.firstName).should('be.visible').type(data.buyerFirstName)
    cy.get(elements.lastName).should('be.visible').type(data.buyerLastName)
    cy.get(elements.posCode).should('be.visible').type(data.buyerPos)
    cy.get(elements.ButtonContinue).should('be.visible').click()
    cy.get(elements.ButtomFinish).should('be.visible').click()
    cy.get(elements.ButtonBackProduct).should('be.visible').click()

})