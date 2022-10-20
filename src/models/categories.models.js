const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Categories = db.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  //? en este segundo objeto se hacen las configuraciones
  {
    //? agrega por defecto el "createAt" y el "updateAt", con "false" ya no lo hara
    timestamps: false,
  }
);

module.exports = Categories;


