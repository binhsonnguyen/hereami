import ipinfo from '../src/ipinfo'

const assert = require('assert')
describe('Ping IpInfo Test', () => {
  it('should get right token', () => {
    const token = 'foo bar'
    process.env['IP_INFO_TOKEN'] = token
    const actual = ipinfo.getAccessToken()
    assert.equal(actual, token)
  })

  it('should get ip information', async function () {
    const token = ipinfo.getAccessToken()
    const specs = await ipinfo.getIpSpecs(token)
    assert(specs != null)
  })
})
