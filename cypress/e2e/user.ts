/// <reference types="../support/index.d.ts" />

import { createUser } from "../support/generate"

describe('User Page', () => {
    it.skip('should sign up', () => {
        const user = createUser()
        cy.visit('/sign-up')
        cy.signUp(user)
        
        cy.url().should('eq', `${Cypress.config().baseUrl}/`)
        cy.findByText(user.username).should('exist')
    })


    it('should sign in and sign out', () => {
        cy.visit('/sign-in')

        cy.findAllByPlaceholderText(/email/i).type('e2e@wongames.com');
        cy.findAllByPlaceholderText(/password/i).type('123456');
        cy.findByRole('button', { name: /sign in now/i }).click()
     
        cy.url().should('eq', `${Cypress.config().baseUrl}/`)
        cy.findByText('cypress').should('exist').click()
        cy.findByText(/sign out/i).click()
        
        cy.findByText('cypress').should('not.exist')
        cy.findAllByRole('link', { name: /sign in/i }).should('exist')
    })
})