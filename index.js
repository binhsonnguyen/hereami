import { IpInfoTwitter } from './src/ipinfo-twitter'

const axios = require('axios')
const express = require('express')

const listener = express().listen(0, () => {
  new IpInfoTwitter().start()
  console.log(`Example app listening on port ${listener.address().port}!`)
})
