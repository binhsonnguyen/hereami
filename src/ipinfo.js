import { TokenKeeper } from './token-keeper'

const axios = require('axios')

class IpInfo {
  constructor () {
    this.ipInfoToken = new TokenKeeper('IP_INFO_TOKEN')
    axios.interceptors.request.use(request => {
      console.log('Starting Request', request)
      return request
    })
  }

  async getIpSpecs () {
    const response = await axios.get(this.getAccessUrl())
    return response.data
  }

  getAccessUrl () {
    const token = this.ipInfoToken.getValue() || ''
    const encodedToken = encodeURI(token)
    return `https://ipinfo.io?token=${encodedToken}`
  }
}

const ipinfo = new IpInfo()
Object.freeze(ipinfo)

export default ipinfo
