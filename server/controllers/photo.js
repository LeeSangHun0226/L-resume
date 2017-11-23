const multer = require('multer');
const AWS = require('aws-sdk');

AWS.config.region = 'ap-northeast-2';

const Register = require('../models/register');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3();

exports.saveAcademicPhoto = (upload.single('file'), (req, res) => {  
  const { email } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${email}/academic/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ email },
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
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { 'academic.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}


exports.saveEducationPhoto = (upload.single('file'), (req, res) => {
  const { email } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${email}/education/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ email },
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
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { 'education.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveExtracurricularPhoto = (upload.single('file'), (req, res) => {
  const { email } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${email}/extracurricular/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ email },
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
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { 'extracurricular.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveAwardPhoto = (upload.single('file'), (req, res) => {
  const { email } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${email}/award/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ email },
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
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { 'award.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}

exports.saveExtraPhoto = (upload.single('file'), (req, res) => {
  const { email } = req.params;
  const index = req.body.photo.index;
  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `${email}/extra/${index}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    Register.update({ email },
      {
        $push: {
          'extra.photo': {
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

exports.modifyExtraPhoto = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { 'extra.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
};

