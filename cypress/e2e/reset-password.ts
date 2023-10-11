/// <reference types="../support/index.d.ts" />

describe('Forgot Password', () => {
    it('should show error if password does not match', () => {
        cy.visit('/reset-password?code=23872381')

        cy.findAllByPlaceholderText(/^password/i).type('123')
        cy.findAllByPlaceholderText(/confirm password/i).type('321')
        cy.findByRole('button', { name: /reset password/i }).click()

        cy.findByText(/confirm password does not match with password/i).should('exist')
    })

    it('should show error if code is not invalid', () => {
        cy.intercept('**/auth/reset-password', res => {
            res.reply({
                status: 400,
                body: {
                    error: 'Bad Request',
                    message: [
                        {
                            messages: [
                                {
                                    message: 'Incorrect code provided'
                                }
                            ]
                        }
                    ]
                }
            })
        })

        cy.visit('/reset-password?code=wrong_code')
        cy.findAllByPlaceholderText(/^password/i).type('123')
        cy.findAllByPlaceholderText(/confirm password/i).type('123')
        cy.findByRole('button', { name: /reset password/i }).click()

        cy.findByText(/incorrect code provided/i).should('exist')
    })
})