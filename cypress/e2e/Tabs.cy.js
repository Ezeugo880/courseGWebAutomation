describe("handle tabs", ()=>{

  it("Approach1", ()=>{

   
    cy.on('uncaught:exception', (err, runnable) => {
        
        return false
        
         })

     cy.visit("https://the-internet.herokuapp.com/windows");
     cy.get('.example > a').click();
     cy.get('h3').should('be.visible');



     
     
  })



})