it('is doing something very important', (done) => {
    // this event will automatically be unbound when this
    // test ends because it's attached to 'cy'
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('a is not a function')
      expect(err.message).to.include('jQuery is not defined')
  
      
      // return false to prevent the error from
      // failing this test
      return false
    })
  })