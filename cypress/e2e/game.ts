/// <reference types="../support/index.d.ts" />

describe('Game Page', () => {
    it('should render game page sections', () => {
     cy.visit('/game/baldurs-gate-iii')

     cy.getByDataCy('game-info').within(() => {
        cy.findByRole('heading', { name: /baldur's gate 3/i }).should('exist')	
        cy.findByText(/^Gather your party, and return to/i ).should('exist')
        cy.findByText('$199.99').should('exist')
        cy.findByRole('button', { name: /add to cart/i }).should('exist')
     })

     // gallery
     cy.findAllByRole('button', { name: /thumb \-/i}).should('have.length.gt', 0)
    })
})