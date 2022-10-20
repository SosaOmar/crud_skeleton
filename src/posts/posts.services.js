const postControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
  postControllers
    .getAllPosts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createPosts = (req, res) => {
  const userId = req.user.id;
  const { title, content, categoryId } = req.body;

  if (title && content && categoryId) {
    postControllers
      .createPost({ title, content, userId, categoryId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "mising data",
      fields: {
        title: "string",
        content: "string",
        categoryId: "uuid",
      },
    });
  }
};

module.exports = {
  createPosts,
  getAllPosts,
};
