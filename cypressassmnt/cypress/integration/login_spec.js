context('Login-IRCTC', () =>  {
    it('Login scenario', () => {
        cy.visit('https://www.irctc.co.in/nget/train-search')
        //for clicking the menu button
        cy.get('.h_menu_drop_button.hidden-xs > a > .fa').click()
        //clcking the login button
        cy.get('.ng-star-inserted > .search_btn').click()
        //inserting the username
        cy.get('#userId').type('xyzabs@gmail.com')
        //inserting the password
        cy.get('#pwd').type('Sh722ixbc')
        //clicking the submit button
        cy.get('form > button.search_btn').click()
        cy.title().should('include','My account')
        
    })  
})
