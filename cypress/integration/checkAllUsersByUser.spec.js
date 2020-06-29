import users from '../../assets/users.json'

it('login and logout all users correctly using user', () => {
  cy.visit('/login')

  users.forEach(user => {
    const { password, ...userToTest } = user

    cy.get('input#userOrEmail').type(userToTest.user)
    cy.get('input#password').type(password)

    cy.get('button[type=submit]').click()

    cy.visit('/home')

    cy
      .window()
      .its('store')
      .invoke('getState')
      .its('user')
      .should('deep.equal', userToTest)

    cy.get('button#logout').click()

    const emptyUserState = {}

    Object.keys(userToTest).map(item => emptyUserState[item] = null)

    cy
      .window()
      .its('store')
      .invoke('getState')
      .its('user')
      .should('deep.equal', emptyUserState)
  })
})
