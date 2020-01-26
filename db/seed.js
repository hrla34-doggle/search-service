/* eslint-disable no-console */
const data = require('./data-generator.js');

const Trip = require('./index.js');


// function to create a trip from random data
const tripGenerator = () => {
  const trip = {};
  trip.season = data.season();
  trip.year = 2020;
  trip.days = data.days();
  trip.country = data.country();
  trip.cities = data.cities(trip.country);
  trip.imageUrl = data.imageUrl(trip.cities);
  trip.name = data.name(trip.country);
  trip.descriptions = data.descriptions();
  trip.nights = trip.days - 1;
  trip.meals = {
    breakfasts: Math.floor(Math.random() * trip.days),
    lunches: Math.floor(Math.random() * trip.days),
    dinners: Math.floor(Math.random() * trip.nights),
  };
  trip.the_trafalgar_difference = data.the_trafalgar_difference();
  trip.sightseeing_highlights = data.sightseeing_highlights();
  trip.travel_highlights = data.travel_highlights();
  return trip;
};

// function to create 100 random trips
// create a new trip
// check if its name exists in the list of created trip names, to prevent duplicates in database
// if it's not, add it to trips array
// give all trips id from 1 to 100
// keep track of used trip names in names array
// once we have 100 uniquely named trips, we are finished
const createTrips = () => {
  const trips = [];
  const names = [];
  let tripsAdded = 0;
  while (tripsAdded < 100) {
    const newTrip = tripGenerator();
    if (!names.includes(newTrip.name)) {
      trips[tripsAdded] = newTrip;
      trips[tripsAdded].id = tripsAdded + 1;
      names.push(newTrip.name);
      tripsAdded += 1;
    }
  }
  return trips;
};

// insert all 100 trips into the database
const insertTrips = () => {
  const allTrips = createTrips();
  Trip.insertMany(allTrips)
    .then(() => console.log(allTrips))
    .catch((err) => console.error(err));
};

// run the seeding function, by running the page 'node db/seed.js'
insertTrips();
