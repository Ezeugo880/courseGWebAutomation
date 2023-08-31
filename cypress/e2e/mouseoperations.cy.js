

describe("mouse operations", ()=>{

  it("mouseHover", ()=>{

   cy.visit("https://demo.opencart.com/")
   cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();
   cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should("be.visible")
   cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should("be.visible")

  })

   it('drag and drop using plugin', ()=>{
     cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
     cy.get('#box7').drag('#box102', {force:true});


   })
    it("Right click",()=>{

     cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
     cy.get('.context-menu-one').trigger('contextmenu');
     cy.get('.context-menu-icon-paste').should('be.visible');
     cy.get('.context-menu-icon-copy > span').should('be.visible');
    })
    

    it("scroling page", ()=>{

       cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
       cy.get(':nth-child(2) > tbody > :nth-child(28) > :nth-child(1) > img').scrollIntoView({duration:2000});
       cy.get(':nth-child(2) > tbody > :nth-child(28) > :nth-child(1) > img').should('be.visible');
       cy.get(':nth-child(1) > tbody > :nth-child(19) > :nth-child(1) > img').scrollIntoView({duration:2000});
    })


   })

     

     




