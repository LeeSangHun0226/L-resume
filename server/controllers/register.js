const User = require('../models/user');
const Register = require('../models/register');

// allRegisterGet, oneRegisterGet, saveRegister

exports.oneRegisterGet = (req, res) => {
  const { userId } = req.params;

  Register.find({ userId })
    .then((data) => {
      if (data.length !== 0) {
        return res.json(data);
      }
      return false;
    })
    .catch(err => res.send(err));
};

exports.saveRegister = (req, res) => {

  const { userId } = req.params;
  const { contact, education, academic, extracurricular, award } = req.body;
  const updateData = req.body;

  Register.find({ userId })
  .then((data) => {
    if (data.length === 0) {
      const register = new Register({
        userId,
        contact,
        education,
        academic,
        extracurricular,
        award,
      });

      return register.save()
        .then(saveRegisterData => res.json(saveRegisterData))
        .catch(err => res.send({ err }));
    }

    return Register.update({ userId }, { $set: updateData }, (err) => {
      if (err) res.send({ err });
      res.json({ update: 'success' });
    });
  });
};
