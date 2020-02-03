const mongoose = require('mongoose');

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

module.exports = mongoose.model('Trip', tripSchema);
