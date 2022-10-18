//! Dependencias

//todo 1
const express = require("express");

//todo 8 => ir a database.js
const { port } = require("./config");

//todo 43 => npm i passport passport-jwt jsonwebtoken

//todo 44 crear la carpeta "auth" dentro de "src"

//todo 45 dentro de "src" crear "auth.services.js"

//todo 46 dentro de "src" crear "auth.router.js"

//todo 47 dentro de "src" crear "auth.controller.js" => ir a users.controllers.js

//TODO 50
const db = require("./utils/database");

//todo 42
const userRouter = require("./users/users.router");
//TODO 56
const authRouter = require("./auth/auth.router");

const initModels = require("./models/initModels");

//TODO 51
db.authenticate()
  .then(() => {
    console.log("Database Authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels(); //? tiene que ir despues de authenticate y sync

//TODO 52 crear base de datos en dbeaver ir a .env

//! Configuraciones iniciales

//todo 2
const app = express();

//todo 3
app.use(express.json());

//todo 5 => ir a config.js
app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    users: `localhost:${port}/api/v1/users`,
  });
});

//todo 43
app.use("/api/v1/users", userRouter);

//TODO 57 => creamos un usuario en la base
app.use("/api/v1/auth", authRouter);

//todo 4
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
