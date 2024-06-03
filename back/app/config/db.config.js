module.exports = {
  HOST: "localhost",
  USER: "kragsi",
  PASSWORD: "kragsi",
  DB: "kragsi",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
