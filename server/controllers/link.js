const Register = require('../models/register');

exports.saveAcademicLink = (req, res) => {  
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'academic.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyAcademicLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'academic.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveEducationLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'education.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyEducationLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'education.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveExtracurricularLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'extracurricular.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyExtracurricularLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'extracurricular.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveAwardLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'award.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyAwardLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'award.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveExtraLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'extra.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
};

exports.modifyExtraLink = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;
  Register.update({ email }, { $set: { 'extra.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
};