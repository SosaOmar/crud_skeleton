//todo 22 luego ir al archivo crypto.js en la carpeta utils
const uuid = require("uuid");

//todo 19
const Users = require("../models/users.models");
const { hashPassword } = require("../utils/crypto");

//todo 20.1 (all controllers)
const getAllUsers = async () => {
  const data = await Users.findAll({
    where: {
      status: "active",
    },
  });
  return data;
};

//todo 20.2
const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
      status: "active",
    },
  });

  return data;
};

//todo 27
const createUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    country: data.country,
  });
  return newUser;
};

//todo 28
const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

//todo 29
const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

//todo 21 npm i bcrypt

// todo 48 => ir a auth.controller
const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email:email,
      status:"active"
    },
  });

  return data;
};

//todo 30
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
