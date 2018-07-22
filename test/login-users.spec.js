const chai = require('chai')
const { expect } = chai

describe('Login user', () => {
  const validUser = { username: 'peter', password: 'spiderman' }
  const service = chai.request('http://localhost')

  it('get user credentials when post user given a valid user', async () => {
    // Act
    const res = await service.post('/auth').send(validUser)

    // Assert
    expect(res.ok).to.be(true)
    expect(res.body).to.be.exist()
  })
})
