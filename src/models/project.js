// External Dependancies
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Project", projectSchema);
