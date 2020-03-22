import { TokenKeeper } from '../src/token-keeper'
import { IpInfoTwitter } from '../src/ipinfo-twitter'

const assert = require('assert')
const ipInfoTwitter = new IpInfoTwitter()

const twitterToken = new TokenKeeper('TWITTER_TOKEN')
const originalTwitterToken = twitterToken.getValue()
const twitterUrl = new TokenKeeper('TWITTER_URL')
const originalTwitterUrl = twitterUrl.getValue()

describe('Ping IpInfo Test', () => {
  afterEach(() => {
    twitterToken.set(originalTwitterToken)
    twitterUrl.set(originalTwitterUrl)
  })

  it('should generate right twitter url', () => {
    const token = 'foo bar'
    twitterToken.set(token)
    const url = 'pi.local'
    twitterUrl.set(url)
    const uri = `pi.local`
    const actual = ipInfoTwitter.getTwitterUrl()
    assert.equal(actual, uri)
  })
})
