const multer = require('multer');
const AWS = require('aws-sdk');

AWS.config.region = 'ap-northeast-2';

const Register = require('../models/register');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3();

exports.saveAcademicPhoto = (upload.single('file'), (req, res) => {  
  const { userId } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${userId}/academic/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ userId },
      { $push: { 'academic.photo': {
        data_uri: data.Location,
        photoFlag: true,
        filename,
      } } }, (err1) => {
        if (err1) throw err;
        res.send({ update: 'success' });
    });
  });
});

exports.modifyAcademicPhoto = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;

  Register.update({ userId }, { $set: { 'academic.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}


exports.saveEducationPhoto = (upload.single('file'), (req, res) => {
  const { userId } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${userId}/education/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ userId },
      {
        $push: {
          'education.photo': {
            data_uri: data.Location,
            photoFlag: true,
            filename,
          }
        }
      }, (err1) => {
        if (err1) throw err;
        res.send({ update: 'success' });
      });
  });
});

exports.modifyEducationPhoto = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;

  Register.update({ userId }, { $set: { 'education.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveExtracurricularPhoto = (upload.single('file'), (req, res) => {
  const { userId } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${userId}/extracurricular/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ userId },
      {
        $push: {
          'extracurricular.photo': {
            data_uri: data.Location,
            photoFlag: true,
            filename,
          }
        }
      }, (err1) => {
        if (err1) throw err;
        res.send({ update: 'success' });
      });
  });
});

exports.modifyExtracurricularPhoto = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;

  Register.update({ userId }, { $set: { 'extracurricular.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveAwardPhoto = (upload.single('file'), (req, res) => {
  const { userId } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${userId}/award/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ userId },
      {
        $push: {
          'award.photo': {
            data_uri: data.Location,
            photoFlag: true,
            filename,
          }
        }
      }, (err1) => {
        if (err1) throw err;
        res.send({ update: 'success' });
      });
  });
});

exports.modifyAwardPhoto = (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;

  Register.update({ userId }, { $set: { 'award.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

