const express = require('express');
const router = express.Router();
const request = require('request');

let username = process.env.USER_NAME;
let oauthToken = process.env.GIT_TOKEN;

const user_options = {
    url: 'https://api.github.com/users/' + username,
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    }
};

const repo_options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    }
};

// Moved API call into server to protect oAuthToken
router.get('/user', function (req, res) {
    request(user_options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
});

// Moved API call into server to protect oAuthToken
router.get('/repos', function (req, res) {
    request(repo_options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
});

module.exports = router;