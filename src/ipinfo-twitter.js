import { TokenKeeper } from './token-keeper'
import ipinfo from './ipinfo'

const axios = require('axios')

export class IpInfoTwitter {
  constructor () {
    this.twitterToken = new TokenKeeper('TWITTER_TOKEN')
    this.twitterUrl = new TokenKeeper('TWITTER_URL')
    this.interval = new TokenKeeper('TWITTER_INTERVAL')
  }

  start () {
    setTimeout(async () => {
      try {
        await this.tweet(await ipinfo.getIpSpecs())
        console.log('-----------------------------------------------------------------')
      } catch (e) {
        console.error('co loi', e.message)
      }
      this.start()
    }, this.interval.getValue() || 60000)
  }

  async tweet (ipInfo) {
    const token = this.twitterToken.getValue()
    const data = { token: token, ipInfo: ipInfo }
    return await axios.post(this.getTwitterUrl(), data)
  }

  getTwitterUrl () {
    return encodeURI(this.twitterUrl.getValue() || '')
  }
}
