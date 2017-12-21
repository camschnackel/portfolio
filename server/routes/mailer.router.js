// requires
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// contact user
const contactCredentials = {
    username: process.env.MAIL_UN,
    pw: process.env.MAIL_PW
}; // end contactCredentials

// hunter's email
const cameron = 'cam@schnackel.io';

// setup email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: contactCredentials.username,
        pass: contactCredentials.pw
    } // end auth
}); // end transporter
// Moved API call into server to protect oAuthToken
router.post('/', function (req, res) {
    console.log('mailer post ran');
    transporter.sendMail({
        from: contactCredentials.username,
        to: cameron,
        subject: 'schnackel.io message from ' + req.body.name + ' [' + req.body.email +']',
        text: req.body.message
    },
        function (err, response) {
            if (err) {
                console.log('Mailer POST err', err);
                res.sendStatus(500);
            } else {
                console.log('Mailer message sent');
                res.send(response);
            }
        }
    )
});

module.exports = router;