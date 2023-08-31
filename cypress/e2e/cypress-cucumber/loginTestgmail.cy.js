/// <reference types= "cypress" />

describe("this is to validate login scenarios into the gmail app", ()=>{

   it("verify user with correct credentials can login to the app", ()=>{

    cy.visit("https://mail.google.com/mail/u/0/#inbox");
    cy.get('#identifierId').type("ugochukwuoloto@gmail.com");
    cy.get('.Tn0LBd').click();
    cy.get('#identifierNext').should("be.visible");
   })


   it("Ensure that google logo is visible", ()=>{
    cy.visit("https://mail.google.com/mail/u/0/#inbox");
    cy.get('.gEc4r > .TrZEUc').should("be.visible");
      
      
     
     })


})
