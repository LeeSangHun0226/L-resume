const Register = require('../models/register');

exports.saveAcademicLink = (req, res) => {  
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'academic.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyAcademicLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'academic.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveEducationLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'education.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyEducationLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'education.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveExtracurricularLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'extracurricular.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyExtracurricularLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'extracurricular.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveAwardLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'award.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.modifyAwardLink = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  Register.update({ userId }, { $set: { 'award.link': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}