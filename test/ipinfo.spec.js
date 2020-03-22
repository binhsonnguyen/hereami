import ipinfo from '../src/ipinfo'
import { TokenKeeper } from '../src/token-keeper'

const assert = require('assert')

const ipInfoToken = new TokenKeeper('IP_INFO_TOKEN')
const originalToken = ipInfoToken.getValue()

describe('Ping IpInfo Test', () => {
  afterEach(() => {
    ipInfoToken.set(originalToken)
  })

  it('should generate right access url', () => {
    const token = 'foo bar'
    ipInfoToken.set(token)
    const url = `https://ipinfo.io?token=${encodeURI(token)}`
    const actual = ipinfo.getAccessUrl()
    assert.equal(actual, url)
  })

  it('should get ip information', async function () {
    const specs = await ipinfo.getIpSpecs()
    assert(specs != null)
  })
})
