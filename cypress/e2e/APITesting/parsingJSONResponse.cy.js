describe("parsing JSON Response", ()=>{


 it("parsing simple JSON response", ()=>{


       cy.request({

                    method: "GET",
                    url: "https://fakestoreapi.com/products",
                    })

                  .then((Response)=>{

                   expect(Response.status).equal(200)
                   expect(Response.body[0].price).equal(109.95)
                   expect(Response.body[0].id).equal(1)
                   expect(Response.body[0].title).equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
                   expect(Response.body[0].category).equal("men's clothing")



                   expect(Response.status).equal(200)
                   expect(Response.body[19].price).equal(12.99)
                   expect(Response.body[19].id).equal(20)
                   expect(Response.body[19].title).equal("DANVOUY Womens T Shirt Casual Cotton Short")
                   expect(Response.body[19].category).equal("women's clothing")




                   expect(Response.status).equal(200)
                   expect(Response.body[18].price).equal(7.95)
                   expect(Response.body[18].id).equal(19)
                   expect(Response.body[18].title).equal("Opna Women's Short Sleeve Moisture")
                   expect(Response.body[18].category).equal("women's clothing")



                   })


 })





})







  
 it("parsing simple JSON response", ()=>{

     let totalprice=0

    cy.request({

                 method: "GET",
                 url: "https://fakestoreapi.com/products",
                  qs:{limit:5}
                 })

               .then((Response)=>{

                expect(Response.status).equal(200)
               
                Response.body.forEach(element => {
                  totalprice=totalprice+element.price; 
                });

                expect(totalprice).equal(899.23)



                })


})
