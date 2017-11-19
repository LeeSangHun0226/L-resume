const User = require('../models/user');
const Register = require('../models/register');

exports.oneUserGet = (req, res) => {
  const { email } = req.params;

  User.find({ email }, (err, data) => {
    if (err) console.log(err);
    return res.json(data);
  });
};

exports.saveUser = (req, res) => {
  const { email, password } = req.body;

  const user = new User({
    email,
    password,
  });

  let userId;
  return user.save()
    .then((data) => {
      userId = data._id;
      res.json(data);
    })
    .then(() => {
      const register = new Register({
        userId,
        title: 'MY RESUME TITLE',
        contact: {
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
          email: '',
          photo: '',
        },
        education: {
          body: [{
            schoolType: '',
            schoolName: '',
            startDate: '',
            endDate: '',
            description: '',
          }],
        },
        academic: {
          body: [{
            description: '',
          }],
        },
        extracurricular: {
          body: [{
            position: '',
            activityName: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
            description: '',
          }],
        },
        award: {
          body: [{
            name: '',
            year: '',
            description: '',
          }],
        },
      });

      return register.save()
      .catch(err => res.send({ err }));
    })
    .catch(err => res.send({ err }));
};
