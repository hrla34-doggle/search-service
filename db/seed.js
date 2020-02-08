/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const data = require('./data-generator.js');

const db = require('./index.js');

const Trip = require('./schema.js');

var countries = {
  Africa: ['Egypt', 'Kenya', 'Morocco', 'South Africa'],
  Asia: ['China', 'Israel', 'India', 'Japan', 'South Korea', 'Thailand', 'Vietnam'],
  Europe: ['France', 'Germany', 'Greece', 'Ireland', 'Italy', 'The Netherlands', 'Norway', 'Poland', 'Portugal', 'Russia', 'Spain', 'Switzerland', 'The United Kingdom'],
  'North America': ['The United States', 'Costa Rica', 'Mexico', 'Canada'],
  'South America': ['Brazil', 'Peru'],
  'South Pacific': ['Australia', 'New Zealand'],
};


var locations = ['Australia', 'Israel', 'New Zealand', 'Israel', 'Australia', 'South Korea', 'South Africa', 'South Korea', 'Canada','China', 'Switzerland', 'New Zealand', 'Costa Rica', 'New Zealand', 'New Zealand', 'Costa Rica', 'Peru', 'Kenya', 'Morocco', 'Thailand', 'Kenya', 'Russia', 'Egypt', 'Morocco', 'Australia', 'China', 'New Zealand', 'Mexico', 'Costa Rica', 'Brazil', 'Poland', 'Costa Rica', 'Norway','Peru','South Korea', 'Japan', 'Mexico','The United States', 'France', 'Japan', 'Vietnam', 'Brazil', 'Ireland', 'Canada', 'Australia', 'Thailand', 'Vietnam', 'Peru', 'Egypt', 'Brazil', 'Greece', 'Costa Rica', 'Kenya', 'Kenya', 'South Korea', 'New Zealand', 'Greece', 'Mexico', 'Australia', 'Costa Rica', 'Norway', 'South Korea', 'Vietnam', 'The United States', 'Greece', 'South Africa', 'Morocco', 'India', 'Kenya', 'Australia', 'New Zealand', 'Germany', 'Peru', 'South Africa', 'Peru', 'Italy', 'Ireland', 'India', 'Australia', 'Morocco', 'The United States', 'Vietnam', 'Israel', 'Poland', 'Italy', 'Egypt', 'Mexico', 'Spain', 'Japan', 'Canada', 'Costa Rica', 'Switzerland', 'Israel', 'Peru', 'Brazil', 'Brazil', 'Japan', 'South Africa', 'Mexico', 'Poland']

// function to create a trip from random data
const tripGenerator = (x) => {
  const trip = {};
  trip.season = data.season();
  trip.year = 2020;
  trip.days = data.days();
  trip.country = locations[x];
  trip.continent = (()=>{for( var continent in countries ){ if( countries[continent].includes(trip.country) ){return continent}}})();
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
    const newTrip = tripGenerator(tripsAdded);
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
