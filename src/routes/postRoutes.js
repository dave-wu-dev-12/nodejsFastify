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
];

module.exports = postRoutes;
