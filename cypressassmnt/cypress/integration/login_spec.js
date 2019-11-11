context('Login-IRCTC', () =>  {
    it('Login scenario', () => {
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.get('#loginText').click()
        cy.get('#userId').type('harshavarthinisankar@gmail.com')
        cy.get('#pwd').type('Sh722ixbc')
        cy.get('form > button.search_btn').click()
        cy.title().should('include','My account')
        
    })  
})