const defaultEnv = {
  env: 'default',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  mongoose: {
    debug: true,
    host: process.env.MONGO_HOST || "mongodb://localhost",
    port: process.env.MONGO_PORT || 27017,
    db: "purankuburu",
    user: 'user',
    pass: 'password'
  },
  morgan: {
    debug: true,
    debugLevel: "dev"
  }
}

export default defaultEnv;
