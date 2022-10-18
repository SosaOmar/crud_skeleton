//? Rutas de autorizacion y autenticacion
//? Ejecuta algo entre dos funciones, una funcion entre dos funciones

// Login
// Register
// Recovery y Password
// Verify User

//TODO 52
const router = require("express").Router();

//TODO 63
const authServices = require("./auth.services");

//TODO 53
const { registerUser } = require("../users/users.services");

//TODO 54
router.post("/register", registerUser);

//TODO 64 crear carpeta "middlewares" en "src"
//TODO 65 en middlewares crear "auth.middlewares"
router.post("/login", authServices.login);

//TODO 55 => app.js
module.exports = router;
