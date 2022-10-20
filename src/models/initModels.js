//? importamos todos los modelos de tablas
const Users = require("./users.models");
const Posts = require("./posts.models");
const Categories = require("./categories.models");

//! Relaciones de tablas
//? Pertenece a (1-M): tabla2.belogsTo(tabla1) => Posts.belongTo.(Users) los posts pertenecen a un usuario, Posts.belongTo.(Categories)

const initModels = () => {
  //! tienen que estar los dos puntos de vistas (belongTo y hasMany)

  //! 1-M
  //? Una publicacion le pertenece solo a un usuario
  Posts.belongsTo(Users);
  //? Un usuario puede tener muchas publicaciones
  Users.hasMany(Posts);

  //! 1-M
  //?Una publicacion tiene solo una categoria
  Posts.belongsTo(Categories);
  //? Una categoria puede tener muchos posts
  Categories.hasMany(Posts);
};

module.exports = initModels;
