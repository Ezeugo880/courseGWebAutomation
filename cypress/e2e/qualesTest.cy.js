/// <reference types= "cypress" />

describe("this is to validate login scenarios into the quales app", ()=>{

 it("verify user with corrrect credentials can login into the quales app", ()=>{
  cy.visit("https://academy.quales.tech/login");
  cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
  cy.get('[data-testid="Password"]').type("pass1234");
  cy.get('.MuiButton-contained').click();
  cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
  cy.viewport("macbook-16");
  cy.get('[data-testid="Title*"]').type("cypress testing")
  cy.get('[data-testid="Description*"]').type("cypress api");
  cy.get('#demo-simple-select').type("software development");
  cy.get('[data-value="3"]').click();
  cy.get('[data-testid="offline"]').click();
  cy.get('[data-testid="Address*"]').type("No 11 lekki phase 2 lagos");
  cy.get('.css-tzsjye > .MuiButton-root').click();
  cy.get('.css-tzsjye > .MuiButton-root').should("be.visible");
  
  
 })


 
  
  
 })




 
    


   
    




 