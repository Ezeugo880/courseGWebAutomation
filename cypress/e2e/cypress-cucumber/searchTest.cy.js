/// <reference types= "cypress" />

describe("this test is to validate that user can search on google", ()=>{

   it("search for quales on google", ()=>{
   cy.visit("https://www.google.com/");
   cy.get('#APjFqb').type("quales consulting");
   cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
  
  })






})
