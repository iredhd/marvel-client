import users from '../../assets/users.json'

it('dispatch user correctly on login', () => {
  cy.visit('/login')

  const index = parseInt(Math.random() * ((users.length) - 0) + 0)

  const { password, ...user } = users[index]

  cy.get('input#userOrEmail').type(user.email)
  cy.get('input#password').type(password)

  cy.get('button[type=submit]').click()

  cy
    .window()
    .its('store')
    .invoke('getState')
    .its('user')
    .should('deep.equal', user)
})
