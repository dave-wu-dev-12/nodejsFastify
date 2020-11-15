// External Dependancies
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Post", postSchema);
