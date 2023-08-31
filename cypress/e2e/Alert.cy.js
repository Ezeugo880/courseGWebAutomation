
    describe('Alerts', () => {

         it('Js alert',()=>{
        
         cy.on('uncaught:exception', (err, runnable) => {
        
        return false
        
         })
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
       cy.get(':nth-child(1) > button').click();
        cy.get('#result').should("be.visible");

         cy.on("window:alert", (t)=>{

             expect(t).to.contains("I am a JS Alert");
            })

             })


         })

          


          
        
        
    




