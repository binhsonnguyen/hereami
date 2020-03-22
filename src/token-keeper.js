export class TokenKeeper {
  constructor (key) {
    this._key = key
  }

  getKey () {
    return this._key
  }

  getValue () {
    return this.getKey() in process.env ? process.env[this.getKey()] : undefined
  }

  set (value) {
    process.env[this.getKey()] = value || ''
  }

  unset () {
    delete process.env[this.getKey()]
  }
}
