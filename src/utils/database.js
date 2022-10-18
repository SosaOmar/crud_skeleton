//todo 9
const { Sequelize } = require('sequelize')

//todo 10
const config = require('../config')

//todo 11
const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host, //? Variable de entorno del host
    username: config.db.username, //? Variable de entorno del usuario
    password: config.db.password, //? Variable de entorno de la contraseña
    database: config.db.name //? Variable de entorno de la base de datos
})

//todo 12 => ir a .env
module.exports = db
