/* eslint-disable no-console */
// /* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/trafalgar';

mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', () => console.log('connected!'));

const tripSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  season: { type: String },
  year: { type: Number },
  imageUrl: { type: String },
  days: { type: Number },
  country: {
    type: String,
  },
  cities: [{
    type: String,
  }],
  descriptions: [{
    type: String,
  }],
  nights: { type: Number },
  meals: {
    breakfasts: { type: Number },
    lunches: { type: Number },
    dinners: { type: Number },
  },
  the_trafalgar_difference: [{
    type: String,
  }],
  sightseeing_highlights: [{
    type: String,
  }],
  travel_highlights: [{
    type: String,
  }],
});

const Trip = mongoose.model('Trip', tripSchema);

// // test trip for database:
// const iconicNorth = new Trip({
//   id: 1,
//   name: 'Iconic North',
//   season: 'Summer',
//   year: 2020,
//   imageUrl: 'https://www.trafalgar.com/-/media/Project/Trafalgar/Product/hero-images/Iconic-North-Summer-2020-w.webp?smartCrop=1&centreCrop=1&w=2600&h=800',
//   days: 7,
//   country: 'New Zealand',
//   cities: ['Auckland', 'Tauranga', 'Matamata', 'Rotorua', 'Wellington', 'Blenheim', 'Picton'],
// // eslint-disable-next-line max-len
//   descriptions: ['BUBBLING MUD POOLS AND MĀORI CULTURE DEFINE THIS MEMORABLE ENCOUNTER WITH NEW ZEALANDS NORTH. EXPLORE AUCKLAND, ROTORUA AND WELLINGTON, WITH A STOP FOR LUNCH WITH A RETIRED CHAMPION JOCKEY.', 'Bubbling mud pools and Māori culture define this memorable encounter with New Zealands north. Explore Auckland, Rotorua and Wellington, with a stop for lunch with a retired champion jockey.'],
//   nights: 6,
//   meals: { breakfasts: 6, lunches: 1, dinners: 3 },
//   the_trafalgar_difference: ['Connect with locals', 'dive into culture'],
//   sightseeing_highlights: ['city tour', 'orientation', 'visit', 'view'],
//   travel_highlights: ['audio headsets', 'handcrafted highlights'],
// });

// iconicNorth.save();


module.exports = Trip;
