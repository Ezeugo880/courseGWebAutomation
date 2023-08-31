const Ajv=require('ajv')
const ajv=new Ajv()

describe("Schema Validation", ()=>{


  it("Schema Validation against response",()=>{


       cy.request({
                   method: 'GET',
                   url: "https://fakestoreapi.com/products"
                
                  })

                 .then((Response)=>{

                  var Schema = {
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Generated schema for Root",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "number"
                        },
                        "title": {
                          "type": "string"
                        },
                        "price": {
                          "type": "number"
                        },
                        "description": {
                          "type": "string"
                        },
                        "category": {
                          "type": "string"
                        },
                        "image": {
                          "type": "string"
                        },
                        "rating": {
                          "type": "object",
                          "properties": {
                            "rate": {
                              "type": "number"
                            },
                            "count": {
                              "type": "number"
                            }
                          },
                          "required": [
                            "rate",
                            "count"
                          ]
                        }
                      },
                      "required": [
                        "id",
                        "title",
                        "price",
                        "description",
                        "category",
                        "image",
                        "rating"
                      ]
                    }
                  } // schema ended here

                 const Validate= ajv.compile(Schema)
                  const isValid=Validate(Response.body)
                  expect(isValid).to.be.true;



                 })

  })



})