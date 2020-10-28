// Import our Controllers
const carController = require("../controllers/carController");
const standupController = require("../controllers/standupController");
const teamMemberController = require("../controllers/teamMemberController");

const routes = [
  {
    method: "GET",
    url: "/api/cars",
    handler: carController.getAllCars,
  },
  {
    method: "GET",
    url: "/api/asscars",
    handler: carController.getAssCars,
  },
  {
    method: "GET",
    url: "/api/cartitles",
    handler: carController.getAllCarTitles,
  },
  {
    method: "GET",
    url: "/api/cars/:id",
    handler: carController.getSingleCar,
  },
  {
    method: "POST",
    url: "/api/cars",
    handler: carController.addCar,
  },
  {
    method: "PUT",
    url: "/api/cars/:id",
    handler: carController.updateCar,
  },
  {
    method: "DELETE",
    url: "/api/cars/:id",
    handler: carController.deleteCar,
  },
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
];

module.exports = routes;
