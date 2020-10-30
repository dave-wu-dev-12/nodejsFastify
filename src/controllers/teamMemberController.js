// External Dependancies
const boom = require("boom");

// Get Data Models
const TeamMember = require("../models/teamMember");

exports.getAllTeamMember = async (req, reply) => {
  try {
    console.log(req, reply);
    const teamMember = await TeamMember.find();
    return teamMember;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addTM = async (req, reply) => {
  try {
    console.log(req, reply);
    const teamMember = new TeamMember(req.body);
    let newTeamMember = await teamMember.save();
    return newTeamMember;
  } catch (err) {
    throw boom.boomify(err);
  }
};
