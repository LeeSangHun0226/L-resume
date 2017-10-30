const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Register = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  contact: {
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    photo: { type: String },
    link: { type: String },
    isSubmitLinked: { type: Boolean },
  },
  education: {
    schoolType: { type: String },
    schoolName: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
  },
  academic: {
    description: { type: String },
  },
  extracurricular: {
    position: { type: String },
    activityName: { type: String },
    city: { type: String },
    country: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
  },
  award: {
    name: { type: String },
    year: { type: String },
    description: { type: String },
  },
});

module.exports = mongoose.model('Register', Register);

