

describe("MyTestSuite", ()=>{

  it("dataDrivenTest", ()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        
      return false
      
       })


   cy.fixture("orangehrm").then((data)=>{

    data.forEach( (userdata)=>{

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
      cy.get('.oxd-button').click();

       if(userdata.username=='Admin' && userdata.password=="admin123")
       {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected);
       
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

       }
       else{
        cy.get('.oxd-alert-content > .oxd-text').should("have.text",userdata.expected);
       }

         
         
    
      


    })
      
    })

   
  

     
  

    })


   })









    

    
   
  
    


    
    
    
    
    
    
        
    




