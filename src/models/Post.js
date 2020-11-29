// External Dependancies
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  likes: { type: Number, default: 0 },
  time: { type: Date, default: Date.now },
  comments: [commentSchema],
});

module.exports = mongoose.model("Post", postSchema);
