describe("handling frames", ()=>{

  it("approach",()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.get('#mce_0_ifr').should('be.visible');
    cy.get('#mce_0_ifr').should('be.visible');
    cy.get('h3').should('be.visible');
    cy.get('#mce_0_ifr').should('be.visible')
    cy.get('#mce_0_ifr').click();




  })




})