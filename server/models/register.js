const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Register = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: { type: String },
  contact: {
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    photo: { type: String },
  },
  education: {
    body: [{
      schoolType: { type: String },
      schoolName: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      description: { type: String },
    }],
    photo: [{
      data_uri: { type: String },
      filename: { type: String },
      photoFlag: { type: Boolean },
    }],
    link: [{
      linkUrl: { type: String },
    }],
  },
  academic: {
    body: [{
      description: { type: String },
    }],
    photo: [{
      data_uri: { type: String },
      filename: { type: String },
      photoFlag: { type: Boolean },
    }],
    link: [{
      linkUrl: { type: String },
      linkFlag: { type: Boolean },
    }],
  },
  extracurricular: {
    body: [{
      position: { type: String },
      activityName: { type: String },
      city: { type: String },
      country: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      description: { type: String },
    }],
    photo: [{
      data_uri: { type: String },
      filename: { type: String },
      photoFlag: { type: Boolean },
    }],
    link: [{
      linkUrl: { type: String },
    }],
  },
  award: {
    body: [{
      name: { type: String },
      year: { type: String },
    }],
    photo: [{
      data_uri: { type: String },
      filename: { type: String },
      photoFlag: { type: Boolean },
    }],
    link: [{
      linkUrl: { type: String },
    }],
  },
  extra: [{
    title: { type: String },
    body: [{
      description: { type: String },
    }],
  }],
});

module.exports = mongoose.model('Register', Register);

