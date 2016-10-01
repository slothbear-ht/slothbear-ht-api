const Router = require('express').Router;
const bodyParser = require('body-parser').json();
const qs = require('querystring');
const request = require('request');
const parseString = require('xml2js').parseString;

module.exports = function(connection, authenticat) {
  // TODO: error handling on all the things

  const User = require(__dirname + '/../models/user')(connection);

  var htAuthRouter = Router();

  htAuthRouter.get('/trigger_ht_auth', (req, res) => {
    var newUser = new User();

    newUser.save((err, user) => {
      var requestTokenUrl = 'https://chpp.hattrick.org/oauth/request_token.ashx';
      var requestTokenOAuth = {
        callback: 'http://127.0.0.1:5555/auth/ht_auth/' + user._id,
        consumer_key: process.env.HT_CONSUMER_KEY,
        consumer_secret: process.env.HT_CONSUMER_SECRET
      };

      request.get({ url: requestTokenUrl, oauth: requestTokenOAuth }, (err, response, body) => {
        var requestTokenData = qs.parse(body);
        var authorizeUri = 'https://chpp.hattrick.org/oauth/authorize.aspx' + '?' + qs.stringify({ oauth_token: requestTokenData.oauth_token });

        user.htTokenSecret = requestTokenData.oauth_token_secret;
        user.save((err, user) => {
          res.redirect(authorizeUri);
        });
      });
    });
  });

  htAuthRouter.get('/ht_auth/:userID', (req, res) => {
    User.findById(req.params.userID, (err, user) => {
      var accessTokenUrl = 'https://chpp.hattrick.org/oauth/access_token.ashx';
      var accessTokenOAuth = {
        consumer_key: process.env.HT_CONSUMER_KEY,
        consumer_secret: process.env.HT_CONSUMER_SECRET,
        token: req.query.oauth_token,
        token_secret: user.htTokenSecret,
        verifier: req.query.oauth_verifier,
      };

      request.get({ url: accessTokenUrl, oauth: accessTokenOAuth }, (err, response, body) => {
        var accessTokenData = qs.parse(body);

        // TODO: save access token to user

        var teamUrl = 'http://chpp.hattrick.org/chppxml.ashx?file=teamdetails&version=3.2';
        var teamOAuth = {
          consumer_key: process.env.HT_CONSUMER_KEY,
          consumer_secret: process.env.HT_CONSUMER_SECRET,
          token: accessTokenData.oauth_token,
          token_secret: accessTokenData.oauth_token_secret,
        };

        request.get({ url: teamUrl, oauth: teamOAuth }, (err, response, body) => {
          parseString(body, { explicitArray: false }, (err, result) => {
            // TODO: save team data
            // TODO: replace placeholder redirect
            res.redirect('/?token=success');
          });
        });
      });
    });
  });

  return htAuthRouter;
};
