//todo 38
const router = require("express").Router();

const { session } = require("passport");
//TODO 74 Para rutas protegidas (74,75)
const passport = require("passport");

//TODO 75
require("../middlewares/auth.middlewares")(passport);

//todo 38
const usersService = require("./users.services");

//todo 39
//todo 76 para protejer rutas: "passport.authenticate("jwt", {session:false})"
//? Rutas raiz
// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   usersService.getAllUsers
// );

router.get("/", usersService.getAllUsers);

//TODO 77 informacion prpia del usuario loggeado, lo ponemos arrina de "/:id" para que no tome el "/me" como parametro => users.services.js
router
  .route("/me")
  .get(
    passport.authenticate("jwt", { session: false }), //? proteje la ruta
    usersService.getMyUser
  )
  .patch(
    passport.authenticate("jwt", { session: false }), //? proteje la ruta
    usersService.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }), //? proteje la ruta
    usersService.deleteMyUser
  );

//todo 40
//? Rutas dinamicas por  ID
//? definimos una sola vez la ruta ("/:id"), usar solo cuando una ruta puede varias
router
  .route("/:id")
  .get(usersService.getUserById)
  .patch(usersService.patchUser)
  .delete(usersService.deleteUser);

//todo 41 => app.js
module.exports = router;
