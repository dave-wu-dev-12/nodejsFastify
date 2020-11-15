// External Dependancies
const boom = require("boom");

// Get Data Models
const Post = require("../models/Post");

exports.getAllPosts = async (req, reply) => {
  try {
    console.log(req, reply);
    const post = await Post.find();
    return post;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addPost = async (req, reply) => {
  try {
    console.log(req, reply);
    const post = new Post(req.body);
    let newPost = await post.save();
    return newPost;
  } catch (err) {
    throw boom.boomify(err);
  }
};
