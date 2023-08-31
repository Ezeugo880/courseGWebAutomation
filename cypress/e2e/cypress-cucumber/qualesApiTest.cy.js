/// <reference types= "cypress" />

describe("this is to validate that CRUD operations can be performed on the quales app", ()=>{
   let courseId = "";
   it("verif user can create a course using the post method", ()=>{
    const baseUrl = "https://api.quales.tech/";
    const path = "api/courses/";
    cy.api(
    {
    method: "POST", 
    url: baseUrl + path,
    body: {
      "title": "cypress api testing",
      "categoryId": 2,
      "description": "gerald api test via cypress",
      "courseUrl": "https://www.youtube.com/watch?v=m7dWclg7ag8",
      "imageUrl": "https://source.unsplash.com/usrx/c-v-t/900x800",
      "location": "online",
      "isPremium": false
  }
}).as("createAcourseRequest");
cy.get("@createAcourseRequest").then((res)=>{
    const  responseBody = res.body;
    courseId = res.body.id;
    expect(res.status).to.eql(200);
    expect(responseBody).to.have.property("title");
    expect(responseBody).to.have.property("id");
    expect(responseBody).to.have.property("location");
})
})



it("verifY user can search for a course using the GET method", ()=>{
   const baseUrl = "https://api.quales.tech/";
   const path = "api/courses/";
   cy.api(
   {
   method: "GET", 
   url: baseUrl + path + courseId,
}).as("searchAcourseRequest");
cy.get("@searchAcourseRequest").then((res)=>{
   const  responseBody = res.body;
   expect(res.status).to.eql(200);
   expect(responseBody).to.have.property("title");
   expect(responseBody).to.have.property("id");
   expect(responseBody).to.have.property("location");
})
})

})
