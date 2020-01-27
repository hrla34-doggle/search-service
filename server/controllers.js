const Trip = require('../db/index.js');

const controllers = {
  findAll: (req, res) => (
    Trip.find({})
      .then((trips) => res.status(200).send(trips))
      .catch((err) => res.status(400).send(err))
  ),

  findOne: (req, res) => (
    Trip.find({ id: req.params.id })
      .then((trip) => res.status(200).send(trip))
      .catch((err) => res.status(400).send(err))
  ),

};

module.exports = controllers;
