import 'cypress-file-upload';
describe('file uploads',()=>{

 it("single file upload", ()=>{

cy.visit("https://the-internet.herokuapp.com/upload");
cy.get('#file-upload').attachFile('profile.json');
cy.get('#file-submit').click();
cy.get('h3').should('be.visible');

 })

  it('file upload-Rename',()=>{

    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#file-upload').attachFile({filePath:'profile.json', fileName: 'user.json'});
    cy.get('#file-submit').click();
    cy.get('h3').should('be.visible');


  })

   it('file upload- Drag and drop',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile("profile.json", {subjectType:'drag-n-drop'});
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('be.visible');
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('profile.json');



   })

   it.skip('mutiple files upload',()=>{
  //this is how mutiple file upload looks like
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('{"profile.json","users.json"}');
    cy.get('#file-submit').should('contains.text', 'files you selected')
   })

    it.skip('file upload-shadow dom', ()=>{
    cy.visit('https://www.htmlelements.com/demos/fileupload/overview/');
    cy.get('.smart-browse-input', {includeshadowDom:true}).attachFile('architect 5 (3).wps');
    cy.get('.smart-item-name',{includeshadowDom:true}).contains('architect 5 (3).wps');

   
    })


})

  
