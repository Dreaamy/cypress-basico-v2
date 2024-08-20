

describe('Testando conhecimento Cypress', function() {
    beforeEach(function(){
      cy.visit('https://www.saucedemo.com/v1/')
    })
    
    
    
    it('verifica se acesso a tela de Login', function() {
        cy.get('.login_logo').should('be.visible')
    })

    it('verifica se realizou o Login corretamente', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
    })

    it('verifica se realiza Login com usuario errado', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
        
    })

    it('verifica se realiza Login com senha errada', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret')
        cy.get('#login-button').click()
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
        
    })

    it('verifica se alterna a busca para preço', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.contains('Price (low to high)').should('be.visible')
        
    })

    it('verificando ao adicionar um produto ao carrinho', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.contains('Price (low to high)').should('be.visible')
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('path').click()
        cy.contains('Sauce Labs Onesie').should('be.visible')
    })

    it('verificando ao adicionar 2 prdutos ao carrinho', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.contains('Price (low to high)').should('be.visible')
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.get('.btn_secondary').click({ multiple: true})
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get('path').click()
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    })

    it('selecione 2 ou mais produtos, volte para a tela de produtos e remova todos', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.contains('Price (low to high)').should('be.visible')
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.get('.btn_secondary').click({ multiple: true})
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get('path').click()
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
        cy.get('.cart_footer > .btn_secondary').click()
        cy.contains('Products').should('be.visible')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.btn_secondary').click({ multiple: true})
    })

    it('finalizando um processo de compra com 2 produtos', function() {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.contains('Price (low to high)').should('be.visible')
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get('path').click()
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Lucas')
        cy.get('[data-test="lastName"]').type('Abe')
        cy.get('[data-test="postalCode"]').type(8000000)
        cy.get('.btn_primary').click()
        cy.contains('Checkout: Overview').should('be.visible')
        cy.get('.btn_action').click()
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
    })
})