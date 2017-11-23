const Register = require('../models/register');

exports.titleGet = (req, res) => {
  const { email } = req.params;
  console.log(email, '???')
  Register.findOne({ email }, (err, data) => {
    if (err) res.send({ err });
    const sendData = data.title;
    return res.json(sendData);
  });
};

exports.saveTitle = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { title: data } }, (err) => {
    if (err) res.send({ err });
    return res.send({ update: 'success' });
  });
}

exports.saveNav = (req, res) => {
  const { email } = req.params;
  const { navName } = req.body;

  Register.update({ email }, { $push: { extra: { title: navName } } }, (err) => {
    if (err) console.log(err);
  });
}