/* eslint-disable no-console */
// /* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/trafalgar';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', () => console.log('connected!'));


module.exports = db;
