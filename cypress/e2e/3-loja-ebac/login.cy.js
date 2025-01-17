///<reference types="cypress"></reference>

describe('Funcionalidade Login',() => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
      cy.screenshot()
    });

    it ('Deve fazer login com sucesso',()=> {      
        cy.get('#username').type('edson@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá edson (não é edson? Sair')
    })

    it ('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {     
        cy.get('#username').type('errado@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it ('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {   
      cy.get('#username').type('edson@teste.com.br')
      cy.get('#password').type('@111')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail edson@teste.com.br está incorreta. Perdeu a senha?')

  });
})



