// External Dependancies
const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
  },
  { _id: false }
);

const standupSchema = new mongoose.Schema({
  teamMember: { type: teamMemberSchema },
  workYesterday: { type: String },
});

const standupSchemaTwo = new mongoose.Schema({
  teamMember: {
    first: String,
    last: String,
  },
  workYesterday: { type: String },
});

standupSchemaTwo.path("teamMember.first").required(true, "please supply");

module.exports = mongoose.model("Standup", standupSchemaTwo);
