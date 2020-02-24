const { pool } = require('./config');

const getOneText = 'SELECT * FROM trips WHERE id=$1';

const db = {
  getOne: (id) => {
    return pool.query(getOneText, [id]);
  },

};

module.exports = db;
