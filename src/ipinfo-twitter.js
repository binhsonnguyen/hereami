import { TokenKeeper } from './token-keeper'

const axios = require('axios')

class IpInfoTwitter {
  constructor () {
    this.twitterToken = new TokenKeeper('TWITTER_TOKEN')
    this.twitterUrl = new TokenKeeper('TWITTER_URL')
    axios.interceptors.request.use(request => {
      console.log('Starting Request', request)
      return request
    })
  }

  async tweet () {
    const token = this.twitterToken.getValue()
    let params = {
      data: { token: token }
    }
    const response = await axios.post(this.getTwitterUrl(), params)
  }

  getTwitterUrl () {
    const url = this.twitterUrl.getValue() || ''
    return encodeURI(url)
  }
}

const ipInfoTwitter = new IpInfoTwitter()
Object.freeze(ipInfoTwitter)

export default ipInfoTwitter
