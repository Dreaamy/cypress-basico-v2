

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

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#product').select('YouTube').should('have.value','youtube')
        
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#product').select('mentoria').should('have.value','mentoria')
        
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#product').select(1).should('have.value','blog')
        
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#product').select(1).should('have.value','blog')
        cy.get(':nth-child(4) > input').check().should('have.value','feedback')
        
    })

    it('marca cada tipo de atendimento', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#product').select(1).should('have.value','blog')
        cy.get('#support-type > :nth-child(2) > input').check().should('be.checked','ajuda')
        cy.get(':nth-child(3) > input').check().should('be.checked','elogio')
        cy.get(':nth-child(4) > input').check().should('be.checked','feedback')
        
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('input[type="checkbox"]').check().last().uncheck().should('not.be.checked')
          
    })

    it('marca cada tipo de atendimento', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Abe Bolzani')
        cy.get('#email').type('lucas-bolzani@hotmail.com')
        cy.get('#product').select(1).should('have.value','blog')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('input[type="checkbox"]').check().last().uncheck().should('not.be.checked')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')

    })

    it('seleciona um arquivo da pasta fixture', function() {
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json').should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })

    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'} ).should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })

    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]').selectFile('@sampleFile').should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })

    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')

    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a').invoke('removeAttr','target','_blank').click()
        cy.contains('Talking About Testing').should('be.visible')

    })

    it('testa a página da política de privacidade de forma independente', function() {
        cy.get('#privacy a').invoke('removeAttr','target','_blank').click()
        cy.contains('Talking About Testing').should('be.visible')

    })
    
})

  
