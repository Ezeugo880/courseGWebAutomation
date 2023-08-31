describe("this to validate CRUD can be performed with cypress", ()=>{
    
    let courseId = "";
    it("verif user can create a course using the post method", ()=>{
     const baseUrl = "https://api.quales.tech/";
     const path = "api/courses/";
     cy.api(
     {
     method: "POST", 
     url: baseUrl + path,
     body: {
        "id": 2,
        "title": "cypress api",
        "categoryId": "2",
        "description": "ezeugo api testing",
        "imageUrl": "https://source.unsplash.com/user/c_v_r/900x800",
        "isPremium": false,
        "location": "online",
        "imageurl": "https://source.unsplash.com/user/c_v_r/900x800",
        "courseUrl": "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
        "createdAt": "2023-08-19T14:26:52.000000Z"
    }
 }).as("createAcourseRequest");
 cy.get("@createAcourseRequest").then((res)=>{
     const  responseBody = res.body;
     courseId = res.Body.id;
     expect(res.status).to.eql(200);
     expect(responseBody).to.have.property("title");
     expect(responseBody).to.have.property("id");
     expect(responseBody).to.have.property("location");
     expect(responseBody).to.have.property("description");
    

 })
 })

})



it.only("verifY user can search for a course using the GET method", ()=>{
    const baseUrl = "https://api.quales.tech/";
    const path = "api/courses/";
    cy.api(
    {
    method: "GET", 
    url: baseUrl + path + 46,
 }).as("searchAcourseRequest");
 cy.get("@searchAcourseRequest").then((res)=>{
    const  responseBody = res.body;
    expect(res.status).to.eql(200);
    expect(responseBody).to.have.property("title");
    expect(responseBody).to.have.property("id");
    expect(responseBody).to.have.property("location");
    
 })
 })
 

 it("verifY user can delete for a course using the delete method", ()=>{
    const baseUrl = "https://api.quales.tech/";
    const path = "api/courses/";
    cy.api(
    {
    method: "DELETE", 
    url: baseUrl + path + 19,
 }).as("deleteAcourseRequest");
 cy.get("@deleteAcourseRequest").then((res)=>{
    const  responseBody = res.body;
    expect(res.status).to.eql(204);
    
    
 })
 })




 
 
 