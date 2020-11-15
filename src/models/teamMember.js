// External Dependancies
const mongoose = require("mongoose");
const teamMemberStringValidator = function (val) {
  let tempVal = val.trim();
  let isAlphaRegex = /^[a-zA-Z]+$/;

  return tempVal != "" && tempVal.length < 10 && isAlphaRegex.test(tempVal);
};

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: teamMemberStringValidator,
      message: (props) => `${props.value} is not a valid name!`,
    },
  },
  chore: { type: String },
});

module.exports = mongoose.model("TeamMember", teamMemberSchema);
