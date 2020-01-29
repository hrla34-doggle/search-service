const mongoose = require('mongoose');
const supertest = require('supertest');
const chai = require('chai');

const { expect } = chai;

const app = require('../server/index.js');

const request = supertest(app);


describe('server', () => {
  it('Testing to see if Jest works', async (done) => {
    const response = await request.get('/api/trips');
    expect(response.status).equal(200);
    done();
  });
});
