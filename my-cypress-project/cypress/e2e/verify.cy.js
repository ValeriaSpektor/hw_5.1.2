describe('SQL Verifier Page Load Test', () => {
  it('Should load the SQL Verifier page successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')

   
    cy.get('body').should('exist')
  })
})
