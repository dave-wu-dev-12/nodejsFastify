// External Dependancies
const boom = require("boom");

// Get Data Models
const Car = require("../models/Car");

// Get all cars
exports.getCars = async (req, reply) => {
  try {
    console.log(req, reply);
    const cars = await Car.find();
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car by ID
exports.getSingleCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new car
exports.addCar = async (req, reply) => {
  try {
    console.log(req, reply);
    const car = new Car(req.body);
    let newCar = await car.save();
    return newCar;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing car
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const update = await Car.findByIdAndUpdate(id, req.body, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};
