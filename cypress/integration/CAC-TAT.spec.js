

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
      cy.visit('./src/index.html')
    })
    
    
    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
 
  
    it('concluindo o cadastro e verificando que deu sucesso', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.success').should('be.visible', 'success')
    })

    it('escrevendo texto longo com 0 de delay', function() {
  
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('.button').click()
        cy.get('.success').should('be.visible', 'success')
    })

    it('campo de telefone so permite digitar numero e nao outro caracteres, valide isso', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#phone').type('asdasdasdasd').should('have.value', '')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
     })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#phone').type('asdasdasdasd').should('have.value', '')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.error').should('be.visible', 'error')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas').should('have.value', 'Lucas').clear().should('have.value','')
        cy.get('#lastName').type('Abe Bolzani').should('have.value', 'Abe Bolzani').clear().should('have.value','')
        cy.get('#email').type('lucas-bolzani@hotmail.com').should('have.value', 'lucas-bolzani@hotmail.com').clear().should('have.value','')
        cy.get('#phone').type('123456789').should('have.value', '123456789').clear().should('have.value','')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.error').should('be.visible', 'error')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.error').should('be.visible', 'error')
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
  
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('concluindo o cadastro e verificando que deu sucesso usando o contains para enviar', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('.button', 'Enviar').click()
        cy.get('.success').should('be.visible', 'success')
    })
})

  
