//todo 31
const { hashPassword } = require("../utils/crypto");
const usersControllers = require("./users.controllers");

//todo 32
const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//todo 33
const getUserById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

//todo 34
const patchUser = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, phone, gender, country } = req.body;

  usersControllers
    .updateUser(id, { firstName, lastName, phone, gender, country })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` });
      } else {
        res.status(400).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//todo 35
const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      //? data: esto nos devulve un numero (la cantidad que fueron eliminados) si es 1 o más es truthy  si es 0 es falsy
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid Id" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//todo 36
const registerUser = (req, res) => {
  const { firstName, lastName, email, password, phone, birthday } = req.body;

  if (firstName && lastName && email && password && phone && birthday) {
    usersControllers
      .createUser({ firstName, lastName, email, password, phone, birthday })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        firstName: "string",
        lastName: "string",
        email: "examplete@gmail.com",
        password: "string",
        phone: "+59892525648",
        birthday: "YYYY/MM/DD",
      },
    });
  }
};

//TODO 78 servicios para usuario espesifico, a nuestro propio perfil => users.router
const getMyUser = (req, res) => {
  const id = req.user.id; //? req.user => informacion del token desencriptado
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const patchMyUser = (req, res) => {
  const id = req.user.id;

  const {
    firstName,
    lastName,
    phone,
    gender,
    country,
    birthday,
  } = req.body;
  if (
    firstName ||
    lastName ||
    phone ||
    gender ||
    country ||
    birthday
  ) {
    usersControllers
      .updateUser(id, {
        firstName,
        lastName,
        phone,
        gender,
        country,
        birthday,
      })
      .then((data) => {
        res
          .status(200)
          .json({ message: `User with the id:${id}, edited succesfully!` });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "One or more fields are wrong. The data options to change are",
      fields: {
        firstName: "string",
        lastName: "string",
        phone: "+59892525648",
        birthday: "YYYY/MM/DD",
      },
    });
  }
};

//? esta una forma
// const deleteMyUser = (req, res) => {
//   const id = req.user.id; //? req.user => informacion del token desencriptado
//   usersControllers
//     .deleteUser(id)
//     .then(() => {
//       res.status(201).json();
//     })
//     .catch((err) => {
//       res.status(400).json({ message: err.message });
//     });
// };

//? esta es la manera correcta
const deleteMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers.updateUser(id, { status: "inactive" })
      .then(() => {
        res.status(200).json({ message: `Your user was deleted succesfully!` });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
};


//todo 37 => router
module.exports = {
  getAllUsers,
  getUserById,
  patchUser,
  deleteUser,
  registerUser,
  getMyUser,
  patchMyUser,
  deleteMyUser,
};
