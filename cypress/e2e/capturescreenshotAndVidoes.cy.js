describe('MySuite', ()=>{

 it("capture screenshots & videos", ()=>{

 cy.visit("https://demo.opencart.com/");
  cy.screenshot("homepage");
  cy.get('#logo > a > .img-fluid').screenshot("logo");



  //automatically capture screenshots & on failure - only when you excute through CLI
  

  


 })



})