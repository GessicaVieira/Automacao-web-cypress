//hooks
    //before - antes de todos os testes
    //beforeEach - antes de cada teste
    //after - depois de todos os testes
    //afterEach - depois de cada teste

const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() => {
    cy.screenshot();
})

context('Login', () => {

    it('Login com sucesso', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.get(element.input_password).type(Cypress.env('PASSWORD'));
        cy.Login(email, password);
    });


    it('Login com e-mail válido e a senha inválida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.get(element.input_password).type(Cypress.env('PASSOWORD_INVALIDO'));
        cy.get(element.btn_login).click();
        cy.MsgLoginFalho()

    });


    it('Login com e-mail inválido e a senha válida', () => {
        cy.get(element.input_email).type('sysadminn@qacoders.com');
        cy.get(element.input_password).type(Cypress.env('PASSWORD'));
        cy.get(element.btn_login).click();
        cy.MsgLoginFalho()
    });

    
});