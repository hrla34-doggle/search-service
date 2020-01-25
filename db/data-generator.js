/* eslint-disable no-unused-vars */
const options = require('./options.js');

const data = {

  season: () => (
    // generate a random season
    ['Spring', 'Summer', 'Fall', 'Winter'][Math.floor(Math.random() * 4)]
  ),
  days: () => (
    // generate a random number between 4 and 21.
    // Nights will equal this - 1
    // and breakfasts/lunches/dinners randomly generated based on # of days/nights
    Math.floor(Math.random() * (21 - 4 + 1) + 4)
  ),

  country: () => {
    // generate a random continent
    const continent = options.continents[Math.floor(Math.random() * 6)];
    // pick a random country on that continent
    return options.countries[continent][Math.floor(Math.random() * (options.countries[continent].length))];
  },

  cities: (country) => {
    const allCities = options.cities[country];
    // pick a random number of cities based on how many are in that country
    let numberOfCities = Math.floor(Math.random() * allCities.length + 1);
    // for the number of cities to add, pick a random city
    // and if it isn't already in the citiesToAdd, add it
    const citiesToAdd = [];
    while (numberOfCities > 0) {
      const city = allCities[Math.floor(Math.random() * (allCities.length))];
      if (!citiesToAdd.includes(city)) {
        citiesToAdd.push(city);
        numberOfCities -= 1;
      }
    }
    return citiesToAdd;
  },

  name: (country) => {
    // generate a trip name based on a randomly selected adjective
    const adjectives = ['Explore', 'Adventures In', 'Best of', 'Discover', 'Experience', 'Highlights of', 'Journey through', 'Majestic', 'Splendors of', 'Travel', 'Wonders of'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    return `${adjective} ${country}`;
  },

};

module.exports = data;
