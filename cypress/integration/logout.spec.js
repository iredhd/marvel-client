import users from '../../assets/users.json'

it('dispatch user correctly on logout', () => {
  cy.visit('/login')

  const index = parseInt(Math.random() * ((users.length) - 0) + 0)

  const { password, ...user } = users[index]

  cy.get('input#userOrEmail').type(user.email)
  cy.get('input#password').type(password)

  cy.get('button[type=submit]').click()

  cy.visit('/home')

  cy.get('button#logout').click()

  const emptyUserState = {}

  Object.keys(user).map(item => emptyUserState[item] = null)

  cy
    .window()
    .its('store')
    .invoke('getState')
    .its('user')
    .should('deep.equal', emptyUserState)
})
