// External Dependancies
const boom = require("boom");

// Get Data Models
const Standup = require("../models/standup");

exports.getAllStandups = async (req, reply) => {
  try {
    console.log(req, reply);
    const standup = await Standup.find();
    return standup;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get standups by team member id
exports.getTeammemberStandups = async (req, reply) => {
  try {
    const id = req.params.id;
    const TMstandups = await Standup.where("teamMember.id", id);
    return TMstandups;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addStandup = async (req, reply) => {
  try {
    console.log(req, reply);
    const standup = new Standup(req.body);
    let newStandup = await standup.save();
    return newStandup;
  } catch (err) {
    throw boom.boomify(err);
  }
};
