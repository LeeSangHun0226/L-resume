const Register = require('../models/register');

exports.titleGet = (req, res) => {
  const { email } = req.params;
  Register.findOne({ email }, (err, data) => {
    if (err) res.send({ err });
    // console.log(data)
    const sendData = {
      title: data.title,
      extraTitle: data.extra.title,
    };
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