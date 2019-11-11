describe('Login-In Testing wesite', () =>  {
    it('Login scenario', () => {
        cy.visit('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx')
        cy.get('div.login > input:nth-of-type(1)').type('Tester')
        cy.get('div.login > input:nth-of-type(2)').type('test')
        cy.get('input.button').click()
        cy.get('ul.menu > li:nth-of-type(1) > a').click()
        cy.get('tbody > tr:nth-of-type(2) > td:nth-of-type(1) > input').click()
        cy.get('input.btnDeleteSelected').click()
        cy.get('ul.menu > li:nth-of-type(3) > a').click()
        //Order testing-Dropdown box 
        cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
        cy.get('td > ol:nth-of-type(1) > li:nth-of-type(2) > input').type('10')
        cy.get('td > ol:nth-of-type(1) > li:nth-of-type(3) > input').type('75')
        cy.get('td > ol:nth-of-type(1) > li:nth-of-type(4) > input').type('30')
        cy.get('td > ol:nth-of-type(1) > li:nth-of-type(5) > input.btn_dark').click()
        //address info
        cy.get('td > ol:nth-of-type(2) > li:nth-of-type(1) > input').type('abced')
        cy.get('td > ol:nth-of-type(2) > li:nth-of-type(2) > input').type('xyzccc')
        cy.get('td > ol:nth-of-type(2) > li:nth-of-type(3) > input').type('qwertyu')
        cy.get('td > ol:nth-of-type(2) > li:nth-of-type(4) > input').type('qqetukdssza')
        cy.get('td > ol:nth-of-type(2) > li:nth-of-type(5) > input').type('5600016')
        
              
        //Payment information
        cy.get('tr > td:nth-of-type(1) > label').click()
        cy.get('td > ol:nth-of-type(3) > li:nth-of-type(2) > input').type('098765432112')
        cy.get('td > ol:nth-of-type(3) > li:nth-of-type(3) > input').type('25/11')
        cy.get('a.btn_light').click()

        //Back to first page
        cy.get('ul.menu > li:nth-of-type(1) > a').click()

    })  
})
