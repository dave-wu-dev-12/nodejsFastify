// External Dependancies
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  likes: { type: Number, default: 0 },
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
