/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const db = require('../db/dbHelpers.js');

const controllers = {
  // for initial page load, we get all trips' name/season/year for displaying in search bar, and id for if a trip is selected by user, and cities for searching by city
  findAll: (req, res) => (
    db.getAll()
      .then((trips) => res.status(200).send(trips.map((trip) => [trip.id, trip.name, trip.season, trip.year, trip.continent, trip.cities, trip.country])))
      .catch((err) => res.status(400).send(err))
  ),
  // for when a user selects a trip, use its id to get all the information about that trip in order to render the page appropriately
  findOne: (req, res) => (
    db.getOne(req.params.id)
      .then((trip) => res.status(200).send(trip))
      .catch((err) => res.status(400).send(err))
  ),
  post: (req, res) => (
    db.post(req.body)
      .then(() => res.status(200).send(req.body.name + ' posted!'))
      .catch((err) => res.status(400).send(err))
  ),
  update: (req, res) => (
    db.update(req.params.id, req.body)
      .then(() => res.status(200).send(req.params.id + ' updated!'))
      .catch((err) => res.status(400).send(err))
  ),
  delete: (req, res) => (
    db.delete(req.params.id)
      .then(() => res.status(200).send(req.params.id + ' deleted!'))
      .catch((err) => res.status(400).send(err))
  ),
};

module.exports = controllers;
