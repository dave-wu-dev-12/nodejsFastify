// External Dependancies
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
});

const nameSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: String,
});

const carNameonlySchema = new mongoose.Schema({
  name: { type: nameSchema, required: true },
});

module.exports = mongoose.model("Car", carSchema);
