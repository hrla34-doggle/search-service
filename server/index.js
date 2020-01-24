/* eslint-disable no-console */

const express = require('express');

const app = express();
const port = 3003;

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// const router = require('router.js');
// const db = require('../db)

// middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use('/api', router);

app.use('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`listening on port ${port}!`));
