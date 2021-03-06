const User = require('../models/user');
const Register = require('../models/register');

exports.oneUserGet = (req, res) => {
  const { email } = req.params;
  

  User.findOne({ email }, (err, data) => {

    if (err) res.send(err);
    return res.json(data);
  });
};

exports.saveUser = (req, res) => {
  const { email } = req.body;
  // const user = new User({
  //   email,
  //   password,
  // });

  // let userId;
  // return user.save()
    // .then((data) => {
      // userId = data._id;
      const register = new Register({
        // userId,
        email,
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
        extra: {
          title: 'Add new +',
          body: [{
            description: '',
          }],
        },
      });

      return register.save()
    // })
    .then(data => res.json(data))
    .catch(err => res.send({ err }));
};
