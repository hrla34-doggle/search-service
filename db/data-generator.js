/* eslint-disable max-len */
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
    // pick a random number of cities (at least 2) based on how many are in that country
    let numberOfCities = Math.floor(Math.random() * allCities.length + 1);
    if (numberOfCities === 1) { numberOfCities = 2; }
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

  imageUrl: (cities) => {
    // generates a random city generated from the previous function
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    // creates the corresponding Object Url in S3
    const imageUrl = `${randomCity}.jpg`;
    return imageUrl;
  },

  name: (country) => {
    // generate a trip name based on a randomly selected adjective
    const adjectives = ['Explore', 'Adventures In', 'Best of', 'Discover', 'Experience', 'Highlights of', 'Journey through', 'Majestic', 'Splendors of', 'Travel', 'Wonders of'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    return `${adjective} ${country}`;
  },

  descriptions: () => {
    // randomly generate first and second descriptions from lorem ipsum text
    const firstDescription = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis.',
      'Non blandit massa enim nec dui nunc mattis enim ut. In tellus integer feugiat scelerisque, accumsan lacus vel facilisis volutpat est velit egestas dui id.',
      'Suspendisse potenti nullam ac tortor vitae purus faucibus, egestas quis ipsum suspendisse ultrices. A pellentesque sit amet porttitor eget dolor.',
      'Laoreet id donec ultrices tincidunt arcu non. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris pellentesque pulvinar pellentesque habitant morbi.',
      'Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Etiam dignissim diam quis enim lobortis, sapien eget mi proin sed libero.',
    ];
    const secondDescription = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Diam donec adipiscing tristique risus nec feugiat, in ornare quam viverra orci sagittis eu volutpat.',
      'Nullam non nisi est sit, velit ut tortor pretium viverra suspendisse potenti nullam, pulvinar proin gravida hendrerit lectus a.',
      'Eu non diam phasellus vestibulum lorem sed, vivamus at augue eget arcu dictum varius, maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.',
      'Vivamus at augue eget arcu dictum varius duis, diam donec adipiscing tristique risus, venenatis urna cursus eget nunc scelerisque.',
    ];
    const first = firstDescription[Math.floor(Math.random() * firstDescription.length)];
    const second = secondDescription[Math.floor(Math.random() * secondDescription.length)];
    return [first, second];
  },

  the_trafalgar_difference: () => {
    // generate randomly between 1 and 4 entries with real first word followed by lorem ipsum text
    const firstWord = ['Connect With Locals', 'Stays With Stories', 'Local Specialists', 'Dive Into Culture', 'Make A Difference'];
    const restOfSentence = [
      'volutpat sed',
      'nam at lectus',
      'risus nec feugiat in',
      'quis enim lobortis scelerisque fermentum dui',
      'egestas sed tempus urna et pharetra pharetra',
      'consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis',
      'eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat',
    ];
    let numberOfSentences = Math.floor(Math.random() * 4) + 1;
    const sentences = [];
    while (numberOfSentences > 0) {
      const first = firstWord[Math.floor(Math.random() * firstWord.length)].toUpperCase();
      const rest = restOfSentence[Math.floor(Math.random() * restOfSentence.length)];
      sentences.push(`${first} ${rest}`);
      numberOfSentences -= 1;
    }
    return sentences;
  },

  sightseeing_highlights: () => {
    // generate randomly between 1 and 4 entries with real first word followed by lorem ipsum text
    const firstWord = ['City Tour', 'Visit', 'Orientation', 'View', 'See', 'Scenic Drive', 'VIP Admission'];
    const restOfSentence = [
      'egestas sed',
      'fermentum et sollicitudin',
      'nunc mi ipsum faucibus',
      'pellentesque pulvinar pellentesque habitant morbi tristique senectus et',
      'egestas sed tempus urna et pharetra pharetra',
      'egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor',
      'consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus',
    ];

    let numberOfSentences = Math.floor(Math.random() * 4) + 1;
    const sentences = [];
    while (numberOfSentences > 0) {
      const first = firstWord[Math.floor(Math.random() * firstWord.length)].toUpperCase();
      const rest = restOfSentence[Math.floor(Math.random() * restOfSentence.length)];
      sentences.push(`${first} ${rest}`);
      numberOfSentences -= 1;
    }
    return sentences;
  },

  travel_highlights: () => {
    // generate 6-12 travel highlights based on real data from Trafalgar page
    const choices = [
      'Audio Headsets for flexible sightseeing',
      'Luxury air-conditioned coach with Wi-Fi in most countries or alternative transportation (such as rail journeys)',
      'Cherry-picked hotels, all tried and trusted',
      'All porterage and restaurant gratuities',
      'Handcrafted Highlights',
      'An expert Travel Director and professional Driver',
      'Daily breakfast and up to half your evening meals',
      'Optional Experiences and free time',
      'Must-see sightseeing and surprise extras',
      'All hotel tips, charges and local taxes',
      'VIP entry to many sights',
      'Airport transfers on the first and last day of your guided holiday',
      'The services of a Trafalgar Local Host at your hotel',
      'Use of Trafalgar\'s Reception Centre offering a range of services including tickets for day trips and local attractions',
    ];
    let numberOfHighlights = Math.floor(Math.random() * (12 - 6 + 1) + 6);
    const highlights = [];
    while (numberOfHighlights > 0) {
      const highlight = choices[Math.floor(Math.random() * (choices.length))];
      if (!highlights.includes(highlight)) {
        highlights.push(highlight);
        numberOfHighlights -= 1;
      }
    }
    return highlights;
  },

};

module.exports = data;
