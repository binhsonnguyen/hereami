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
})
