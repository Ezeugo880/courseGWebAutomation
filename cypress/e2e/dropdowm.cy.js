/// <reference types= "cypress" />

describe('this is to validate user can book a flight ', ()=>{

    it(' verify user can choose any country', ()=>{

     cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
     cy.get('#billing_email').type('ugochukwuoloto@gmail.com')
     cy.get('#billing_city').type('enugu')
     cy.get('#billing_address_1').type('lekki phase 2')
     cy.get('#billname').type('quales')
     cy.get('#billing_phone').type('09033262693')
     cy.get('#select2-billing_country-container').click()
     cy.get('.select2-search__field').type('nigeria{enter}')
    cy.get('#select2-billing_state-container').click()
     cy.get('.select2-search__field').type("Abuja{enter}")
     cy.get('#select2-reasondummy-container').click()
     cy.get('.select2-search__field').type("proof of return at airport{enter}")
     cy.get('#billing_address_1').should('be.visible')
      
    })


      it("'auto suggest dropdown", ()=>{
      
        cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput").type("delhi")
        cy.get(".suggestion-title").contains("Delhi University").click()
        cy.get(".mw-headline").should("be.visible")
        

    

        

      })
      




})
