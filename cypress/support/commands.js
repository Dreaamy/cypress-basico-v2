Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Abe Bolzani')
    cy.get('#email').type('lucas-bolzani@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button').click()

})
