/// <reference types="../support/index.d.ts" />

describe('Home Page', () => {
    it('should render home sections', () => {
        // visitar a página
        cy.visit('/')

        cy.get('.slick-slider').within(() => {
            cy.findByRole('heading', { name: /atlantic fleet/i })
            cy.findByRole('link', { name: /buy now/i })

            cy.get('.slick-dots > :nth-child(2) > button').click()
            cy.wait(500)

            cy.findByRole('heading', { name: /freespace 2/i })
            cy.findByRole('link', { name: /buy now/i })

            cy.get('.slick-dots > :nth-child(3) > button').click()
            cy.wait(500)

            cy.findByRole('heading', { name: /vambrace: cold soul/i })
            cy.findByRole('link', { name: /browse games/i })

        })
    })
})