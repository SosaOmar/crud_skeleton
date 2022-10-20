const router = require("express").Router();
const passport = require("passport");

const postServices = require("./posts.services");
require("../middlewares/auth.middlewares")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    postServices.getAllPosts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    postServices.createPosts
  );

module.exports = router;
