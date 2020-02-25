const Trip = require('./schema.js');

const helpers = {
  getAll: () => Trip.find({}),
  getOne: (id) => Trip.find({ id }),
  post: (item) => Trip.create(item),
  update: (id, item) => Trip.findOneAndUpdate({ id }, item),
  delete: (id) => Trip.findOneAndDelete({ id }),
};

module.exports = helpers;
