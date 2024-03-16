describe('Page Load Test', () => {
  it('Should load the page successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.contains('Sqlverifier').should('be.visible') 
  })

  
  it("Autorisation of registered user",() => {
    const login = "user_1984";
    const password = "542073VS!";
  })
})

//test number 2
describe('Login Test', () => {
  it('Should login with predefined credentials', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/')
    cy.get('#account-menu').click()
    cy.get('#login-item').click()
    cy.get('input[name="username"]').type('User_1984');
    cy.get('input[name="password"]').type('542073VS!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
cy.contains('Sqlverifier').should('be.visible').click()
  })
})
