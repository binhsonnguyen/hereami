import { TokenKeeper } from '../src/token-keeper'

const assert = require('assert')

describe('Token Keeper Test', () => {
  it('should be init', () => {
    let key = 'foo'
    let value = 'bar'
    process.env[key] = value
    let keeper = new TokenKeeper(key, value)
    assert.equal(keeper.getKey(), key)
    assert.equal(keeper.getValue(), value)
  })
})
