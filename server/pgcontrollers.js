/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const db = require('../database/queries');

const controllers = {
  // for initial page load, we get all trips' name/season/year for displaying in search bar, and id for if a trip is selected by user, and cities for searching by city
  findAll: (req, res) => (
    res.status(200).send('not built yet')
    // db.getAll()
    //   .then((trips) => res.status(200).send(trips.map((trip) => [trip.id, trip.name, trip.season, trip.year, trip.continent, trip.cities, trip.country])))
    //   .catch((err) => res.status(400).send(err))
  ),
  // for when a user selects a trip, use its id to get all the information about that trip in order to render the page appropriately
  findOne: (req, res) => (
    db.getOne(req.params.id)
      .then((trip) => {
        const returnObj = {};
        returnObj.id = trip.rows[0].id;
        returnObj.name = trip.rows[0].name;
        returnObj.season = trip.rows[0].season;
        returnObj.year = trip.rows[0].year;
        returnObj.imageUrl = trip.rows[0].imageurl;
        returnObj.days = trip.rows[0].days;
        returnObj.continent = trip.rows[0].continent;
        returnObj.country = trip.rows[0].country;
        returnObj.cities = trip.rows[0].citiesstr.split(',');
        returnObj.descriptions = trip.rows[0].descriptionsstr.split(',');
        returnObj.nights = trip.rows[0].nights;
        returnObj.breakfasts = trip.rows[0].breakfasts;
        returnObj.lunches = trip.rows[0].lunches;
        returnObj.dinners = trip.rows[0].dinners;
        returnObj.the_trafalgar_difference = trip.rows[0].differencestr.split(',');
        returnObj.sightseeing_highlights = trip.rows[0].sightseeingstr.split(',');
        returnObj.travel_highlights = trip.rows[0].travelstr.split(',');

        res.status(200).send(returnObj);
      })
      .catch((err) => res.status(400).send(err.stack))
  ),
  post: (req, res) => (
    res.status(200).send('not built yet')
    // db.post(req.body)
    //   .then(() => res.status(200).send(req.body.name + ' posted!'))
    //   .catch((err) => res.status(400).send(err))
  ),
  update: (req, res) => (
    res.status(200).send('not built yet')
    // db.update(req.params.id, req.body)
    //   .then(() => res.status(200).send(req.params.id + ' updated!'))
    //   .catch((err) => res.status(400).send(err))
  ),
  delete: (req, res) => (
    res.status(200).send('not built yet')
    // db.delete(req.params.id)
    //   .then(() => res.status(200).send(req.params.id + ' deleted!'))
    //   .catch((err) => res.status(400).send(err))
  ),
};

module.exports = controllers;
