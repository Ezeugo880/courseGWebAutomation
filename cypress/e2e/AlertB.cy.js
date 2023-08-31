describe("alert", ()=>{

  it("js confirm alert -cancel", ()=>{


    cy.on('uncaught:exception', (err, runnable) => {
        
        return false
        
         })


      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
      cy.get(':nth-child(2) > button').click();
      

      cy.on('window:confirm', (t)=>{

         expect(t).to.contains('I am a JS Confirm');
         cy.on('window:confirm', ()=> false);

         cy.get('#result').should('have.text', 'You clicked: Cancel')

      })

        it.only("JS confirm alert", ()=>{

         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
         cy.get("button [onclick='jsConfirm()']").click();

         cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');

            cy.get('#result').should('have.text', 'You clicked: Ok');

         })
        
        
        })

        
      })
      
  })

