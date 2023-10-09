/// <reference types="../support/index.d.ts" />

import { createUser } from "../support/generate"

describe('User Page', () => {
    it('should sign up', () => {
        const user = createUser()
        cy.visit('/sign-up')
        cy.signUp(user)
        
        cy.url().should('eq', `${Cypress.config().baseUrl}/`)
        cy.findByText(user.username).should('exist')
    })
})