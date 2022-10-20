const Posts = require("../models/posts.models");

const uuid = require("uuid");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");

const getAllPosts = async () => {
  const data = await Posts.findAll(
    //? Para hacer joins (va en controllers porque es directo a la base de datos)
    {
      include: [
        //? un objeto por tabla ( 2 tablas 2 objetos)
        {
          //? importamos los modelos de las tablas que queremos hacer join
          model: Users,
        },
        {
          model: Categories,
        },
      ],
    }
  );
  return data;
};

const getPostById = async (id) => {};

const createPost = async (data) => {
  const response = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    createdBy: data.userId,
    categoryId: data.categoryId,
  });
  return response;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
};
