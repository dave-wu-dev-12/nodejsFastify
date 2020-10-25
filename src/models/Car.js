// External Dependancies
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
});

module.exports = mongoose.model("Car", carSchema);