const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/proyect',
  port: process.env.PORT || 8888,
};

export default config;
