describe("Alert", ()=>[

  it("Authenticated alert", ()=>{

   cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: 
   
                                                                {username: "admin", password: "admin"} });
                                                                cy.get('p').should("be.visible");                                                         

  })

  
])