//TODO 49 => ir a app
const { getUserByEmail } = require("../users/users.controllers");

//TODO 51
const { comparePassword } = require("../utils/crypto");

//TODO 50
const loginUser = async (email, password) => {
  //* Este controlador tiene 2 posibles respuestas
  //* 1 Las credenciales son validas y retornamos el usuario
  //* 2 Las credenciales son invalidas y retornamos false

  try {
    const user = await getUserByEmail(email, password);
    //? user.password contiene la contraseña encriptada de mi base de datos
    const verifyPassword = comparePassword(password, user.password);
    if (verifyPassword) {
      return user;
    }
    return false;
  } catch (err) {
    return false;
  }
};

//TODO 58 (comprobamos si funciona el login) => auth.services.js
//? con then y catch porque es async y tiene await
// loginUser("omar@gmail.com", "contraseña")
// .then(response => console.log(response))
// .catch(err => console.log(err))

//TODO 52 => auth.router
module.exports = {
  loginUser,
};
