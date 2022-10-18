//? middlewares para protejer rutas
//? Revisa si existe un tokem
//?Si el token pertenece a un usuario

//TODO 66
const JwtStrategy = require("passport-jwt").Strategy; //? maneja estrategias para las autenticaciones (formas de autenticarse), como cuando inicias sesion en una pagina con tu cuenta de google, facebook

//TODO 72
const { jwtSecret } = require("../config");

//TODO 73 => users.router
const { getUserById } = require("../users/users.controllers");

//TODO 67
const ExtractJwt = require("passport-jwt").ExtractJwt; //? extrae de los header del jwt

//TODO 68 en .env crear JWT_SECRET = *palabra*

//TODO 69
//? exportar funcion anonima
//? va a los header de authorization y ve los que inician en JWT
module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: jwtSecret,
  };

  passport.use(
    new JwtStrategy(options, async (decoded, done) => {
      //? dine(err, decoded)
      try {
        const response = await getUserById(decoded.id);
        if (!response) {
          //? no mandamos un error pero tampoco un usuario por lo tanto no estas autorizado
          return done(null, false);
        }
        console.log("decoded JWT", decoded);
        return done(null, decoded);
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
