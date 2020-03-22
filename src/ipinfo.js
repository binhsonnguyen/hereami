class IpInfo {
  async getIpSpecs (token) {
    return null
  }

  getAccessToken () {
    return process.env['IP_INFO_TOKEN']
  }
}

const ipinfo = new IpInfo()
Object.freeze(ipinfo)

export default ipinfo
