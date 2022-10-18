//todo 23
const bcrypt = require("bcrypt");

//todo 24
const hashPassword = (plainPassword) => {
  const hashedPassword = bcrypt.hashSync(plainPassword, 10); //? la cantidad de veces que se va a encriptar (los raunds)
  return hashedPassword;
};

//todo 25
//? comparar si la contraseña root es igual a $2b$10$9fpSzgRyyJSl/K/oEiWTJei1n80Woy5sIyt42HGJZhpp0jTTFIP6m
const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword)
}

// console.log(hashPassword("root"));


// console.log(comparePassword("root", "$2b$10$9fpSzgRyyJSl/K/oEiWTJei1n80Woy5sIyt42HGJZhpp0jTTFIP6m"));

//todo 26 => ir a controllers
module.exports = {
    hashPassword,
    comparePassword
}