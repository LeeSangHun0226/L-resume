const multer = require('multer');
const AWS = require('aws-sdk');

AWS.config.region = 'ap-northeast-2';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3();

exports.savePdf = (req, res) => {
   
};

exports.savePhoto = (upload.single('file'), (req, res) => {

  const filename = req.body.photo.filename;
  const Bucket = 'l-resume';
  const userKey = `user/${filename}.png`;

  const buf = new Buffer(req.body.photo.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
  };

  s3.upload(params, (err, data) => {
    if (err) throw err;

    const photoUrl = {
      photoUrl: data.Location,
    };

    res.json({ photoUrl });
  });
});

