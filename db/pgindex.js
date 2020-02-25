const Sequelize = require('sequelize');

const db = new Sequelize('postgres://justin@localhost:5432/trafalgar');

const Trip = db.define('Trip', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: { type: Sequelize.STRING },
  season: { type: Sequelize.STRING },
  year: { type: Sequelize.INTEGER },
  imageUrl: { type: Sequelize.STRING },
  days: { type: Sequelize.INTEGER },
  continent: { type: Sequelize.STRING },
  country: { type: Sequelize.STRING },
  citiesStr: { type: Sequelize.STRING },
  cities: [{ type: Sequelize.STRING }],
  descriptionsStr: { type: Sequelize.STRING },
  descriptions: [{ type: Sequelize.STRING }],
  nights: { type: Sequelize.INTEGER },
  breakfasts: { type: Sequelize.INTEGER },
  lunches: { type: Sequelize.INTEGER },
  dinners: { type: Sequelize.INTEGER },
  the_trafalgar_difference: [{ type: Sequelize.STRING }],
  differenceStr: { type: Sequelize.STRING },
  sightseeing_highlights: [{ type: Sequelize.STRING }],
  sightseeingStr: { type: Sequelize.STRING },
  travel_highlights: [{ type: Sequelize.STRING }],
  travelStr: { type: Sequelize.STRING },
});

Trip.sync();

module.exports = { Trip };
