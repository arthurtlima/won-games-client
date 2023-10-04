/// <reference types="../support/index.d.ts" />

describe('Game Page', () => {
    before(() => {
        cy.visit('/game/baldurs-gate-iii')
    })

    it('should render game page sections', () => {
     cy.getByDataCy('game-info').within(() => {
        cy.findByRole('heading', { name: /baldur's gate 3/i }).should('exist')	
        cy.findByText(/^Gather your party, and return to/i ).should('exist')
        cy.findByText('$199.99').should('exist')
        cy.findByRole('button', { name: /add to cart/i }).should('exist')
     })

     // gallery
     cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

     //content
     cy.getByDataCy('content').within(() => {
        cy.findByRole('heading', { name: /description/i }).should('exist')
     })
     cy.getByDataCy('content').children().should('have.length.at.least', 2)

     // Details
     cy.getByDataCy('game-details').within(() => {
        cy.findByRole('heading', { name: /game details/i }).should('exist')
        cy.findByRole('heading', { name: /developer/i }).should('exist')
        cy.findByRole('heading', { name: /release date/i }).should('exist')
        cy.findByRole('heading', { name: /platforms/i }).should('exist')
        cy.findByRole('heading', { name: /publisher/i }).should('exist')
        cy.findByRole('heading', { name: /rating/i }).should('exist')
        cy.findByRole('heading', { name: /genres/i }).should('exist')


        cy.findAllByText(/larian studios/i).should('exist')
        cy.findByText(/aug 1, 2023/i).should('exist')
        cy.findByRole('img', { name: /windows/i }).should('exist')
        cy.findByRole('img', { name: /mac/i }).should('exist')
        cy.findByText(/free/i).should('exist')
        cy.findByText(/role-playing \/ fantasy \/ turn-based/i).should('exist')
     })

     cy.shouldRenderShowcase({ name: 'Upcoming Games', highlight: true })
     cy.shouldRenderShowcase({ name: 'You may like these games', highlight: false })
    })

    it('should add/remove game in cart', () => {
        cy.getByDataCy('game-info').within(() => {
            cy.findByRole('button', { name: /add to cart/i }).click()

            cy.findByRole('button', { name: /remove from cart/i }).should('exist')
        })

        cy.findAllByLabelText(/cart items/i).first().should('have.text', 1).click()

        cy.getByDataCy('cart-list').within(() => {
            cy.findByRole('heading', { name: /baldur's gate 3/i }).should('exist')	
        })
    })
})