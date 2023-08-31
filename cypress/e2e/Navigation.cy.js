describe("MySuite", ()=>{

  it("NavigationTest", ()=>{

   cy.visit("https://demo.opencart.com/");

   cy.title().should('eql', "Your Store");
   cy.get(':nth-child(7) > .nav-link').click();
   cy.get('h2').should('have.text', 'Cameras')

   cy.go('back');  
   cy.title().should('eql', "Your Store");

   cy.go('forward');
   cy.get('h2').should('have.text', 'Cameras')
   
})

})


  it("NavigationTest2", ()=>{

    cy.visit("https://demo.opencart.com/");
    cy.title().should('eql', "Your Store");
    cy.get('.nav > :nth-child(4) > .nav-link').click();
    cy.get('h2').should('have.text', 'Tablets');


    cy.go('back');
    cy.title().should('eql', "Your Store");


    cy.go('forward');
    cy.get('h2').should('have.text', 'Tablets');

    cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=34"]').click();
    cy.get('h2').should('have.text', 'MP3 Players');

    cy.go('back');
    cy.get('h2').should('have.text', 'Tablets');

    cy.go('back');
    cy.title().should('eql', "Your Store");

    



  })