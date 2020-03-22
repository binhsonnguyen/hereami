import { TokenKeeper } from '../src/token-keeper'

const assert = require('assert')

describe('Token Keeper Test', () => {
  it('should be init', () => {
    let key = 'foo'
    let value = 'bar'
    process.env[key] = value
    let keeper = new TokenKeeper(key)
    assert.equal(keeper.getKey(), key)
    assert.equal(keeper.getValue(), value)
  })

  it('should return empty token when no one there', () => {
    let key = 'foo'
    delete process.env[key]
    let keeper = new TokenKeeper(key)
    assert.equal(keeper.getValue(), '')
  })

  it('should set token value', () => {
    let key = 'foo'
    let value = 'bar'
    let keeper = new TokenKeeper(key)
    keeper.set(value)
    assert.equal(process.env[key], value)
  })

  it('should empty token after unset', () => {
    let key = 'foo'
    process.env[key] = 'bar'
    let keeper = new TokenKeeper(key)
    keeper.unset()
    const keyIsInEnv = key in process.env
    assert(!keyIsInEnv)
  })
})
