
describe("custom commands",()=>{

  it("handling links", ()=>{

    cy.visit("https://demo.nopcommerce.com/");
    //cy.get(':nth-child(2) > .product-item').click();

   //using custom command
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get('h1').should('have.text','Apple MacBook Pro 13-inch');

})

})

   it("overwriting existing command",()=>{

    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("APPLE MACBOOK PRO 13-inch");
    cy.get('h1').should('have.text','Apple MacBook Pro 13-inch');


})

  it("login command", ()=>{

    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Log in");
    cy.loginapp("ugochukwuoloto@gmail.com", "EmperorG");
  


  })