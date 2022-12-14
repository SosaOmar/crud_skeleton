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

const userRouter = require("./users/users.router");

const authRouter = require("./auth/auth.router");

const categoryRouter = require("./categories/categories.router");

const postsRouter = require("./posts/posts.router");

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

//! Configuraciones iniciales

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    users: `localhost:${port}/api/v1/users`,
  });
});

app.use("/api/v1/users", userRouter);

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/categories", categoryRouter);

app.use("/api/v1/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
