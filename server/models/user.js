const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model('User', User);

