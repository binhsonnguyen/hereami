const axios = require('axios')

class IpInfo {
  constructor () {
    if (process.env.DEBUG === 'true') {
      axios.interceptors.request.use(request => {
        console.log('Starting Request', request)
        return request
      })
    }
  }

  async getIpSpecs () {
    const response = await axios.get(this.getAccessUrl())
    console.log(response.data)
    return response.data
  }

  getAccessUrl () {
    const token = encodeURI(this.getAccessToken())
    return `https://ipinfo.io?token=${token}`
  }

  getAccessToken () {
    return process.env['IP_INFO_TOKEN'] || ''
  }
}

const ipinfo = new IpInfo()
Object.freeze(ipinfo)

export default ipinfo
