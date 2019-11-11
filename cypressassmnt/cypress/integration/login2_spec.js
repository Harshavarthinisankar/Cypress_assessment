context('Login-IRCTC', () =>  {
    it('Login scenario', () => {
        cy.visit('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx')
        cy.get('div.login > input:nth-of-type(1)').type('Tester')
        cy.get('div.login > input:nth-of-type(2)').type('test')
        cy.get('input.button').click()
        cy.get('ul.menu > li:nth-of-type(1) > a').click()
        cy.get('tbody > tr:nth-of-type(2) > td:nth-of-type(1) > input').click()
        cy.get('input.btnDeleteSelected').click()
        
    })  
})