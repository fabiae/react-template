class Configuration {
  envConfig

  constructor() {
    this.envConfig = process.env
  }

  get(key) {
    return this.envConfig[`REACT_APP_${key}`]
  }
}

export const Config = new Configuration()
