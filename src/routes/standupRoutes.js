// Import our Controllers
const standupController = require("../controllers/standupController");
const teamMemberController = require("../controllers/teamMemberController");

const standupRoutes = [
  {
    method: "GET",
    url: "/api/standups",
    handler: standupController.getAllStandups,
  },
  {
    method: "GET",
    url: "/api/standups/:id",
    handler: standupController.getTeammemberStandups,
  },
  {
    method: "POST",
    url: "/api/standups",
    handler: standupController.addStandup,
  },
  {
    method: "POST",
    url: "/api/teamMember",
    handler: teamMemberController.addTM,
  },
  {
    method: "GET",
    url: "/api/teamMember",
    handler: teamMemberController.getAllTeamMember,
  },
  {
    method: "PUT",
    url: "/api/teamMember/:id",
    handler: teamMemberController.updateTM,
  },
  {
    method: "DELETE",
    url: "/api/teamMember/:id",
    handler: teamMemberController.deleteTM,
  },
];

module.exports = standupRoutes;
