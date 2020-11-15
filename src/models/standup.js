// External Dependancies
const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  name: { type: String },
});

const standupSchema = new mongoose.Schema({
  teamMember: { type: teamMemberSchema, required: true },
  workYesterday: { type: String, required: true },
});

const standupSchemaTwo = new mongoose.Schema({
  teamMember: {
    first: String,
    last: String,
  },
  workYesterday: { type: String },
});

standupSchemaTwo.path("teamMember.first").required(true, "please supply");

module.exports = mongoose.model("Standup", standupSchema);
