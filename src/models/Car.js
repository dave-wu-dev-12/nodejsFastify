// External Dependancies
const mongoose = require("mongoose");
const validLastnames = ["chang", "wang"];
const specialWordValidator = function (val) {
  return val.trim() != "" && val.length > 10 && val.indexOf("big") > 1;
};

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
});

const nameSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: {
    type: String,
    validate: {
      validator: specialWordValidator,
      message: (props) => `${props.value} is not a valid cool last name!`,
    },
  },
});

const carNameonlySchema = new mongoose.Schema({
  name: { type: nameSchema, required: true },
});

nameSchema.path("last").required(true, "Please supply a last name");

module.exports = mongoose.model("Car", carNameonlySchema);
