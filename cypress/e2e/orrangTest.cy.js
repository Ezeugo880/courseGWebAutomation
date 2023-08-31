/// <reference types= "cypress" />


describe("this test is to validate that user can login on orangehrmlive", ()=>{

    it("verify that orangehrmlive is visible", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-main-menu-search').should('be.visible')

    cy.xpath("//a").should('have.length', '14') // NO of links
   

   let expName='Gopi krishnan'

   cy.get(".oxd-userdropdown-name").then( (x)=>{

              let actName=x.text()

              //BDD style
              expect(actName).to.equal(expName)
   
              //TDD style
              assert.equal(actName,expName)

})



        


   
   

})
 
 
})
 