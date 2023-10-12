/// <reference types="../support/index.d.ts" />

describe('Cart', () => {
    it('should add and remove items from cart ', () => {
        //visitar a home
        cy.visit('/')
        
        // procurar o jogo e clicar no botao de carrinho
        cy.getByDataCy('game-card').eq(0).within(() => {
            cy.findByRole('button', { name: /add to cart/i }).click()
        })

        // procurar outro jogo e clicar no botao de carrinho
        cy.getByDataCy('game-card').eq(1).within(() => {
            cy.findByRole('button', { name: /add to cart/i }).click()
        })

        // verifica se o icone do carrinho tem o numero de jogos
        cy.findAllByLabelText(/cart items/i)
        .first()
        .contains(2)

        // abre o carrinho e verifica se tem os jogos lá
        cy.findAllByLabelText(/cart items/i)
        .first()
        .click()

        cy.getByDataCy('cart-list').within(() => {
            cy.findAllByRole('heading').should('have.length', 2)
        })

        // fecha o carrinho
        cy.findAllByLabelText(/cart items/i)
        .first()
        .click()

        // procura o jogo adicionado e remove
        cy.getByDataCy('game-card').eq(0).within(() => {
            cy.findByRole('button', { name: /remove from cart/i }).click()
        })

        // procura o outro jogo adicionado e remove
        cy.getByDataCy('game-card').eq(1).within(() => {
            cy.findByRole('button', { name: /remove from cart/i }).click()
        })

        // verifica se o icone do carrinho nao tem nada
        cy.findAllByLabelText(/cart items/i).should('not.exist')

        // abre o carrinho e verifica se está vazio
        cy.findAllByLabelText(/shopping cart/i).first().click()
        //  cy.findByRole('heading', { name: 'Your cart is empty', hidden: true }).should('exist')
        cy.findByRole('heading', { name: 'Your cart is empty' }).should('exist')
    })
})