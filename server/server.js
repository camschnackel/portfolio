const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const request = require('request');
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve back static files
app.use(express.static('./server/public'));

// Route includes
const githubRouter = require('./routes/github.router');
const mailerRouter = require('./routes/mailer.router');
const indexRouter = require('./routes/index.router');

// Routes
app.use('/github', githubRouter);
app.use('/mailer', mailerRouter);

// Catch all bucket, must be last!
app.use('/*', indexRouter);

// Listen //
app.listen(port, function () {
  console.log('Listening on port:', port);
});