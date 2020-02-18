/* eslint-disable no-unused-vars */
const express = require('express');

// eslint-disable-next-line import/extensions
const controllers = require('./controllers.js');

const router = express.Router();

router
  .route('/trips/get')
  .get(controllers.findAll)
  .post(controllers.post);

router
  .route('/trips/:id')
  .get(controllers.findOne)
  .put(controllers.update)
  .delete(controllers.delete);

module.exports = router;
