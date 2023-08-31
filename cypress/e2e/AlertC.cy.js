describe("Alert", ()=>{

  it("Js prompt alert", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
        
        return false
        
         })

   cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

   //THE CORRECT THING
   cy.window().then((win)=>{
     cy.stub(win,'prompt').returns('welcome')
     cy.get("button[onclick='jsprompt()']").click();
     cy.get("#result").should('have.text','you entered: welcome');
   })


   cy.get(':nth-child(3) > button').click();
         cy.get('#result').should("be.visible")


     })
   })
   





