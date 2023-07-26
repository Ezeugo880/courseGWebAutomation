/// <reference types= "cypress" />

describe("this is to validate login scenarios into the facebook app", ()=>{

   it("verify user with corrrect credentials can login to the app", ()=>{

     cy.visit("https://www.facebook.com/");
     cy.get('[data-testid="royal_email"]').type("ugochukwuoloto@gmail.com");
     cy.get('[data-testid="royal_pass"]').type("Oloto1998");
     cy.get('[data-testid="royal_login_button"]').click();
   })



})

