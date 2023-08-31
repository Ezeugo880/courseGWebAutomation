class login
{

   setusername(username)

  {

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);

  }

   setpassword(password)

   {

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
   }


    clicksubmit()

   {

    cy.get('.oxd-button').click();

   }


   verifylogin()

   {

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
   }




}

export default login;