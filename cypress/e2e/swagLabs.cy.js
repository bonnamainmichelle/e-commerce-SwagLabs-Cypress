
import { slowCypressDown } from 'cypress-slow-down'

describe('Loja Swag Labs', () => {
  before(function () {
    cy.visit('https://www.saucedemo.com/')
    slowCypressDown(700)
    cy.viewport(1920, 1080)
  })

  it('Adicionar itens no carrinho de compras', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="product_sort_container"]').select('za')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.get('[data-test="product_sort_container"]').select('lohi')
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Michelle')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('90050310')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    

    cy.get('.pony_express').should('be.visible')
    
  });
});


