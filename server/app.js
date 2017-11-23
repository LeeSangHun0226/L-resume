const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const port = 4000;

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mogod server'); });
// mongoose.connect('mongodb://localhost:27017/resume');
mongoose.connect('mongodb://resume:resume123!@ec2-13-125-28-71.ap-northeast-2.compute.amazonaws.com:14958/resume');

app.listen(port, () => console.log(`server is start. port is ${port}`));

// Set static file location for production
// app.use(express.static(__dirname + '/public'));

// Setting up basic middleware for all Express requests
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(morgan('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Cache-Control', 'no-cache');
  res.header('Pragma', 'no- cache');
  // req.headers['if-none-match'] = 'no-match-for-this';
  next();
});

router(app);
