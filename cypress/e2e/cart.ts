/// <reference types="../support/index.d.ts" />

describe('Cart', () => {
    it('should add and remove items from cart ', () => {
        //visitar a home
        cy.visit('/')
        
        // procurar o jogo e clicar no botao de carrinho
        cy.addToCartByIndex(0)

        // procurar outro jogo e clicar no botao de carrinho
        cy.addToCartByIndex(1)

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
        cy.removeFromCartByIndex(0)

        // procura o outro jogo adicionado e remove
        cy.removeFromCartByIndex(1)

        // verifica se o icone do carrinho nao tem nada
        cy.findAllByLabelText(/cart items/i).should('not.exist')

        // abre o carrinho e verifica se está vazio
        cy.findAllByLabelText(/shopping cart/i).first().click()
        //  cy.findByRole('heading', { name: 'Your cart is empty', hidden: true }).should('exist')
        cy.findByRole('heading', { name: 'Your cart is empty' }).should('exist')
    })
})