const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Users = require("./users.models");
const Categories = require("./categories.models");

const Posts = db.define("posts", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  //? para hacer referencia al usuario quiern lo creo
  createBy: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "create_by",
    references: {
      key: "id", //? a que haremos referencia de la otra tabla
      model: Users, //? la tabla a la cual hacemos referencia (tenemos que importar el modelo de esa tabla a esta tabla)
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      key: "id", //? a que haremos referencia de la otra tabla
      model: Categories, //? la tabla a la cual hacemos referencia (tenemos que importar el modelo de esa tabla a esta tabla)
    },
  },
});

module.exports = Posts;
