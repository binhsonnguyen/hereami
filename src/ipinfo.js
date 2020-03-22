class IpInfo {
  async getIpSpecs (token) {
    return null
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
