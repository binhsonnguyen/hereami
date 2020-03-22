import ipinfo from '../src/ipinfo'

const assert = require('assert')

const originalToken = 'IP_INFO_TOKEN' in process.env ? process.env.IP_INFO_TOKEN : ''

function placeTokenEnv (token) {
  process.env['IP_INFO_TOKEN'] = token
}

function removeTokenEnv () {
  delete process.env.IP_INFO_TOKEN
}

function restoreTokenEnv () {
  process.env.IP_INFO_TOKEN = originalToken
}

describe('Ping IpInfo Test', () => {
  afterEach(() => {
    restoreTokenEnv()
  })

  it('should get right token', () => {
    const token = 'foo bar'
    placeTokenEnv(token)
    const actual = ipinfo.getAccessToken()
    assert.equal(actual, token)
  })

  it('should return empty token when no one there', () => {
    removeTokenEnv()
    const actual = ipinfo.getAccessToken()
    assert.equal(actual, '')
  })

  it('should generate right access url', () => {
    const token = 'foo bar'
    placeTokenEnv(token)
    const url = `https://ipinfo.io?token=${encodeURI(token)}`
    const actual = ipinfo.getAccessUrl()
    assert.equal(actual, url)
  })

  it('should get ip information', async function () {
    const token = ipinfo.getAccessToken()
    const specs = await ipinfo.getIpSpecs(token)
    assert(specs != null)
  })
})
