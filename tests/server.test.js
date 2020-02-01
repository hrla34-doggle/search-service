/* eslint-disable no-undef */
// const mongodb = require('mongoose');
const supertest = require('supertest');
// const chai = require('chai');

// const { expect } = chai;

const app = require('../server/index.js');
// const Trip = require('../db/schema.js');

const request = supertest(app);

// const dbURI = 'mongodb://localhost/Trafalgartest';

// const clearDB = function (done) {
//   mongoose.connection.collections.trips.remove(done);
// };


// // test trip for database:
// const iconicNorth = new Trip ({
//   id: 1,
//   name: 'Iconic North',
//   season: 'Summer',
//   year: 2020,
//   imageUrl: 'https://www.trafalgar.com/-/media/Project/Trafalgar/Product/hero-images/Iconic-North-Summer-2020-w.webp?smartCrop=1&centreCrop=1&w=2600&h=800',
//   days: 7,
//   country: 'New Zealand',
//   cities: ['Auckland', 'Tauranga', 'Matamata', 'Rotorua', 'Wellington', 'Blenheim', 'Picton'],
//   descriptions: ['BUBBLING MUD POOLS AND MĀORI CULTURE DEFINE THIS MEMORABLE ENCOUNTER WITH NEW ZEALANDS NORTH. EXPLORE AUCKLAND, ROTORUA AND WELLINGTON, WITH A STOP FOR LUNCH WITH A RETIRED CHAMPION JOCKEY.', 'Bubbling mud pools and Māori culture define this memorable encounter with New Zealands north. Explore Auckland, Rotorua and Wellington, with a stop for lunch with a retired champion jockey.'],
//   nights: 6,
//   meals: { breakfasts: 6, lunches: 1, dinners: 3 },
//   the_trafalgar_difference: ['Connect with locals', 'dive into culture'],
//   sightseeing_highlights: ['city tour', 'orientation', 'visit', 'view'],
//   travel_highlights: ['audio headsets', 'handcrafted highlights'],
// });

// iconicNorth.save();

// describe('Insert test trip into db', () => {
//   let server;
//   before((done) => {
// //     if (mongoose.connection.db) {
// //       return done();
// //     }
// //     mongoose.connect(dbURI, done);
// //   });
// //   beforeEach((done) => {
// //     server = app.listen(3000, () => {
// //       clearDB(() => {
// //         Trip.create(iconicNorth, done);
// //       });
// //     });
// //   });
// //   afterEach(() => {
// //     server.close();
//   });
// });

describe('server api', () => {
  it('gets all 100 trips in the database', async (done) => {
    const response = await request.get('/api/trips');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(100);
    done();
  });
  it('gets a trip with a given id when passed that number as a parameter', async (done) => {
    const response = await request.get('/api/trips/5');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].id).toBe(5);
    done();
  });
});
