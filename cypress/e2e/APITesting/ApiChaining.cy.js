describe('API chaining in cypress', ()=>{


   it('should make API request and chain them together', ()=>{

      cy.request({
                 method: 'GET',
                 url: "https://fakestoreapi.com/products"

                })

               .then((Response)=>{
               expect(Response.status).equal(200)
               const postid=Response.body[0].id
               return postid

            })
            .then((postId)=>{

                    cy.request({
                            method: 'GET',
                            url: 'https://fakestoreapi.com/products?postId=${postid}'

                       })
                        .then((Response)=>{
                         
                            expect(Response.status).equal(200)
                             expect(Response.body).to.have.length(20)


                        })


            })

   })




})