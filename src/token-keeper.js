export class TokenKeeper {
  constructor (key) {
    this._key = key
  }

  getKey () {
    return this._key
  }

  getValue () {
    return process.env[this.getKey()]
  }
}
