//todo 6
require("dotenv").config();

//todo 7
const config = {
  port: process.env.PORT || 9000,
  nodeENV: process.env.NODE_ENV || "development",
  //todo 71 =>
  jwtSecret: process.env.JWT_SECRET,
  db: {
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "root",
    name: process.env.DB_NAME,
  },
};

//todo 8 => luego a app.js
module.exports = config;
