const Register = require('../models/register');

exports.titleGet = (req, res) => {
  const { userId } = req.params;

  Register.findOne({ userId }, (err, data) => {
    if (err) res.send({ err });
    const sendData = data.title;
    return res.json(sendData);
  });
}

exports.saveTitle = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;

  Register.update({ userId }, { $set: { title: data } }, (err) => {
    if (err) res.send({ err });
    return res.send({ update: 'success' });
  });
}

exports.saveNav = (req, res) => {
  const { userId } = req.params;
  const { navName } = req.body;

  Register.update({ userId }, { $push: { extra: { title: navName } } }, (err) => {
    if (err) console.log(err);
  });
}