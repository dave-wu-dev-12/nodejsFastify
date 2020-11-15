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
    const teamMember = new TeamMember(req.body);
    let newTeamMember = await teamMember.save();
    console.log(newTeamMember);
    return newTeamMember;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.updateTM = async (req, reply) => {
  try {
    const id = req.params.id;
    const update = await TeamMember.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.deleteTM = async (req, reply) => {
  try {
    const id = req.params.id;
    const teamMember = await TeamMember.findByIdAndDelete(id);
    return teamMember;
  } catch (err) {
    throw boom.boomify(err);
  }
};
