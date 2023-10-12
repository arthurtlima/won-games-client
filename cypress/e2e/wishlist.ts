/// <reference types="../support/index.d.ts" />

import { get } from "cypress/types/lodash"


describe('Wishlist Page', () => {
    it('should add and remove games from wishlist', () => {
        // acessa a página de wishlist não logado
        cy.visit('/wishlist')

        // redireciona e faz sigIn
        cy.signIn()

        // verifica se a wishlist tá vazia
        cy.findByRole('heading', { name: /your wishlist is empty/i }).should('exist')

        // vou pegar um jogo e adicionar na wishlist
        cy.getByDataCy('game-card').eq(0).within(() => {
            cy.findAllByLabelText(/add to wishlist/i).click()
        })

        // verifica se o jogo está lá
        cy.getByDataCy('wishlist').within(() => {
            cy.getByDataCy('game-card').should('have.length', 1)
        })

        // remover esse jogo
        cy.getByDataCy('wishlist').within(() => {
            cy.findAllByLabelText(/remove from wishlist/i).click()
        })

        // verificar se está vazio
        cy.findByRole('heading', { name: /your wishlist is empty/i }).should('exist')
    })
})

