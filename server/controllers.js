/* eslint-disable max-len */
const Trip = require('../db/index.js');

const controllers = {
  // for initial page load, we get all trips' name/season/year for displaying in search bar, and id for if a trip is selected by user
  findAll: (req, res) => (
    Trip.find({})
      .then((trips) => res.status(200).send(trips.map((trip) => [trip.id, trip.name, trip.season, trip.year])))
      .catch((err) => res.status(400).send(err))
  ),
  // for when a user selects a trip, use its id to get all the information about that trip in order to render the page appropriately
  findOne: (req, res) => (
    Trip.find({ id: req.params.id })
      .then((trip) => res.status(200).send(trip))
      .catch((err) => res.status(400).send(err))
  ),

};

module.exports = controllers;
