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
];

module.exports = routes;
