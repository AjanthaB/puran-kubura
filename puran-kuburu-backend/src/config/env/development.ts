const devEnv = {
  env: 'dev',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  mongoose: {
    debug: true,
    host: process.env.MONGO_HOST || "mongodb://mongo1",
    port: process.env.MONGO_PORT || 27017,
    db: "test",
    user: 'user',
    pass: 'password'
  },
  morgan: {
    debug: true,
    debugLevel: "dev"
  }
};

export default devEnv;
