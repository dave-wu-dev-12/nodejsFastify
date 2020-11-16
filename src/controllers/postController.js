// External Dependancies
const boom = require("boom");

// Get Data Models
const Post = require("../models/Post");

exports.getAllPosts = async (req, reply) => {
  try {
    console.log(req, reply);
    let sort = { time: -1 };
    const post = await Post.find().sort(sort);
    return post.length > 0 ? post : reply.status(404).send("no data");
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

exports.updatePost = async (req, reply) => {
  try {
    const id = req.params.id;
    const update = await Post.findByIdAndUpdate(id, req.body, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.deletePost = async (req, reply) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);
    return post.length > 0
      ? reply.status(200).send()
      : reply.status(404).send("unable to delete data");
  } catch (err) {
    throw boom.boomify(err);
  }
};
