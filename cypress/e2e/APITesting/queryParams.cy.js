

describe("API testing", ()=>{




  it("passing query parameters", ()=>{


        cy.request({

                       method: 'GET',
                        url: 'https://reqres.in/api/users',
                        qs: {page: 2}
                        
                    
                    })
                    .then( (Response)=>{
                      expect(Response.status).to.eq(200)
                      expect(Response.status).equal(200)
                      expect(Response.body.data[0]).has.property("first_name", 'Michael')
                      expect(Response.body.data[0]).has.property('id', 7)
                      expect(Response.body.data).has.length(6)

                       




                    })

  })


})



  it("post method", ()=>{


       const requestBody={
        
                         "email": "jeff.bluth@reqres.in",
                         "first_name": "jeff",
                         "last_name": "ken",
                          "avatar": "https://reqres.in/img/faces/8-image.jpg"
                        
                        }

      cy.request({

                   method: 'POST',
                   url: 'https://reqres.in/api/users?',
                   body: requestBody
                   
                  })
                  .then( (Response)=>{

                   expect(Response.status).equal(201)
                   expect(Response.body.first_name).to.contains('jeff')
                   expect(Response.body.email).to.contains('jeff.bluth@reqres.in')
                   expect(Response.body.last_name).to.contains('ken')



                  })


  })



    it("put call", ()=>{


           cy.request({
                       method: 'PUT',
                       url: "https://reqres.in/api/users/713",
                       body: {
                        "email": "mark.bluth@reqres.in",
                        "first_name": "mark",
                        "last_name": "ken",
                        "avatar": "https://reqres.in/img/faces/8-image.jpg",
                        "id": "713",
                        "createdAt": "2023-08-29T12:36:52.017Z"
                       }

                      })
                     .its('status').should('equal', 200)
                     cy.wrap({email: "mark.bluth@reqres.in"}).its('email')
                     cy.wrap({id: "713"}).its('id')
                     cy.wrap({first_name: "mark"}).its('first_name')
                     cy.wrap({last_name: "ken"}).its('last_name')
                      
                      })

                    


    
        
                          