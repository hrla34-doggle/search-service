require('newrelic');
/* eslint-disable no-console */

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
// const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// eslint-disable-next-line import/no-unresolved
const router = require('./router.js');
// const db = require('../db)

// middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/loaderio-f1df70c070e28ee67fe67f69bd2ea611', express.static(path.join(__dirname, '../loaderio-f1df70c070e28ee67fe67f69bd2ea611.txt')));
app.use('/api', router);

module.exports = app;
