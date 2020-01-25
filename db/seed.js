const data = require('./data-generator.js');

const Trip = require('./index.js');


// function to create a trip from random data
const tripGenerator = () => {
  const trip = {};
  trip.season = data.season();
  trip.year = 2020;
  trip.imageUrl = //todo
  trip.days = data.days()
  trip.country = data.country();
  trip.cities = data.cities(trip.country);
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
const createTrips = () => {
  const trips = [];
  for (let i = 0; i < 100; i += 1) {
    // for each i, add a random trip
    trips[i] = tripGenerator();
    // add id property to each trip, from 1 to 100
    trips[i].id = i + 1;
  }
  return trips;
};

//insert all 100 trips into the database
const insertTrips = () => (
    let allTrips = createTrips();
    Trip.insertMany(allTrips)
    .then(() => console.log(allTrips))
    .catch (err => console.error(err))
);

//run the seeding function, by running the page 'node db/seed.js'
insertTrips();