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

module.exports = mongoose.model("Standup", standupSchema);
