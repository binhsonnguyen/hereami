import { TokenKeeper } from './token-keeper'

const axios = require('axios')

class IpInfoTwitter {
  constructor () {
    this.twitterToken = new TokenKeeper('TWITTER_TOKEN')
    this.twitterUrl = new TokenKeeper('TWITTER_URL')
    if (process.env.DEBUG === 'true') {
      axios.interceptors.request.use(request => {
        console.log('Starting Request', request)
        return request
      })
    }
  }

  getTwitterUrl () {
    const url = this.twitterUrl.getValue() || ''
    return encodeURI(url)
  }
}

const ipInfoTwitter = new IpInfoTwitter()
Object.freeze(ipInfoTwitter)

export default ipInfoTwitter
