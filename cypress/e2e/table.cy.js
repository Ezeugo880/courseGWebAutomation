describe("handle tables", ()=>{

 it('check number Rows & columns', ()=>{

    cy.visit("https://demo.opencart.com/admin/");
    cy.get('#input-username').type('demo')
    cy.get('#input-password').type('demo')
    cy.get('.btn').click();
    cy.get('.btn-close').click()
    cy.get('#menu-customer > .parent').click();
    cy.get('#collapse-5 > :nth-child(1) > a').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.length', '1');



 })




})

