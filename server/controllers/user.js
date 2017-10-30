const User = require('../models/user');

exports.oneUserGet = (req, res) => {
  const { email } = req.params;

  User.find({ email }, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
};

exports.saveUser = (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  const user = new User({
    email,
    password,
  });

  return user.save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }));
};
