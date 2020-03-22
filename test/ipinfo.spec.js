import ipinfo from '../src/ipinfo'

const assert = require('assert')
describe('Ping IpInfo Test', () => {
  it('should get right token', () => {
    const token = 'foo bar'
    process.env['IP_INFO_TOKEN'] = token
    const actual = ipinfo.getAccessToken()
    assert.equal(actual, token)
  })
})
