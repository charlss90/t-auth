const { serverFactory } = require('..')
const { expect } = require('chai')
const { stub } = require('sinon')
const restify = require('restify')

describe('serverFactory', () => {
  const serverMock = { use: stub() }

  let createServerStub

  beforeEach(() => {
    createServerStub = stub(restify, 'createServer')
    createServerStub.returns(serverMock)
  })

  afterEach(() => {
    createServerStub.restore()
  })

  it('return server when call serverFactory without args', () => {
    // Act
    const server = serverFactory()

    // Arrange
    expect(server).to.equal(serverMock)
    expect(serverMock.use.calledThrice).to.be.eql(true)
  })
})
