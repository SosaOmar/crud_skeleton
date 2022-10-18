//TODO 59
const { loginUser } = require("./auth.controller");

//TODO 60 generador de tokens
const jwt = require("jsonwebtoken");

//TODO 60.1

const { jwtSecret } = require("../config");

//TODO 61
const login = (req, res) => {
  const { email, password } = req.body;

  if (email || password) {
    //? loginUser da true o false por lo tanto la response es true o false
    loginUser(email, password)
      .then((response) => {
        if (response) {
          //? sing: nos genera el token
          //? dentro va lo que queremos encriptar
          const token = jwt.sign(
            {
              id: response.id,
              email: response.email,
              role: response.role,
            },
            jwtSecret
          );
          res.status(200).json({ message: "Correct credentials", token });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    return res.status(400).json({ message: "Missing Data" });
  }
};

//TODO 62 =>auth.router.js
module.exports = {
  login,
};
