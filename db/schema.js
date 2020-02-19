const mongoose = require('mongoose');
const db = require('./index.js');

const tripSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  season: { type: String },
  year: { type: Number },
  imageUrl: { type: String },
  days: { type: Number },
  continent: { type: String },
  country: { type: String },
  citiesStr: { type: String },
  cities: [{ type: String }],
  descriptionsStr: { type: String },
  descriptions: [{ type: String }],
  nights: { type: Number },
  breakfasts: { type: Number },
  lunches: { type: Number },
  dinners: { type: Number },
  the_trafalgar_difference: [{ type: String }],
  differenceStr: { type: String },
  sightseeing_highlights: [{ type: String }],
  sightseeingStr: { type: String },
  travel_highlights: [{ type: String }],
  travelStr: { type: String },
});

module.exports = mongoose.model('Trip', tripSchema);
