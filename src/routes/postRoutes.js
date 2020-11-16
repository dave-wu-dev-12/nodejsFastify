// Import our Controllers
const postController = require("../controllers/postController");

const postRoutes = [
  {
    method: "GET",
    url: "/api/posts",
    handler: postController.getAllPosts,
  },
  {
    method: "POST",
    url: "/api/posts",
    handler: postController.addPost,
  },
  {
    method: "PUT",
    url: "/api/posts/:id",
    handler: postController.updatePost,
  },
  {
    method: "DELETE",
    url: "/api/posts/:id",
    handler: postController.deletePost,
  },
];

module.exports = postRoutes;
