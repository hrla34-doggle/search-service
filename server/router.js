/* eslint-disable no-unused-vars */
const express = require('express');

// eslint-disable-next-line import/extensions
const controllers = require('./controllers.js');

const router = express.Router();

router
  .route('/trips/get')
  .get(controllers.findAll);

router
  .route('/trips/:id')
  .get(controllers.findOne);

module.exports = router;
