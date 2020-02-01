/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../server/index.js');
const Trip = require('../db/schema.js');

const request = supertest(app);

beforeAll(async () => {
  const dbURI = 'mongodb://localhost/Trafalgarservertest';
  await mongoose.connect(dbURI, { useNewUrlParser: true });
});

beforeEach(async () => {
  await Trip.create({
    id: 101,
    name: 'Iconic North',
    season: 'Summer',
    year: 2020,
    imageUrl: 'https://www.trafalgar.com/-/media/Project/Trafalgar/Product/hero-images/Iconic-North-Summer-2020-w.webp?smartCrop=1&centreCrop=1&w=2600&h=800',
    days: 7,
    country: 'New Zealand',
    cities: ['Auckland', 'Tauranga', 'Matamata', 'Rotorua', 'Wellington', 'Blenheim', 'Picton'],
    descriptions: ['BUBBLING MUD POOLS AND MĀORI CULTURE DEFINE THIS MEMORABLE ENCOUNTER WITH NEW ZEALANDS NORTH. EXPLORE AUCKLAND, ROTORUA AND WELLINGTON, WITH A STOP FOR LUNCH WITH A RETIRED CHAMPION JOCKEY.', 'Bubbling mud pools and Māori culture define this memorable encounter with New Zealands north. Explore Auckland, Rotorua and Wellington, with a stop for lunch with a retired champion jockey.'],
    nights: 6,
    meals: { breakfasts: 6, lunches: 1, dinners: 3 },
    the_trafalgar_difference: ['Connect with locals', 'dive into culture'],
    sightseeing_highlights: ['city tour', 'orientation', 'visit', 'view'],
    travel_highlights: ['audio headsets', 'handcrafted highlights'],
  });
});

afterEach(async () => {
  await Trip.deleteOne({ name: 'Iconic North' });
});

afterAll(async (done) => {
  await mongoose.connection.collections.trips.deleteMany(done);
});

describe('server api', () => {
  it('gets all trips in the database', async (done) => {
    const response = await request.get('/api/trips');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1); // database should contain 1 trip after running sample trip
    done();
  });
  it('gets a trip with a given id when passed that number as a parameter', async (done) => {
    const response = await request.get('/api/trips/101');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1); // response should only include one trip
    expect(response.body[0].id).toBe(101); // that trip's id should be 101 as described when inserted
    expect(response.body[0].name).toBe('Iconic North'); // its name should be Iconic North
    done();
  });
});
