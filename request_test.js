var qs = require('querystring')
  , oauth =
    { callback: 'http://127.0.0.1:5555/auth/ht_auth/'
    , consumer_key: '5WFun3Xhb1UXBqho7A6dC'
    , consumer_secret: 'wYbZ6vFc5qGAucQDlxANaHsY2eM8nptmOQ8RQBXDWo2'
    }
  , url = 'https://chpp.hattrick.org/oauth/request_token.ashx'
  ;

var request = require('request');

request.get({url:url, oauth:oauth}, function (e, r, body) {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has
  // verified with twitter that they are authorizing your app.

  // step 2
  var req_data = qs.parse(body)
  console.log(req_data);
  var uri = 'https://chpp.hattrick.org/oauth/authorize.aspx'
    + '?' + qs.stringify({oauth_token: req_data.oauth_token})
  // redirect the user to the authorize uri
  console.log(uri);
  // // step 3
  // // after the user is redirected back to your server
  // var auth_data = qs.parse(body)
  //   , oauth =
  //     { consumer_key: CONSUMER_KEY
  //     , consumer_secret: CONSUMER_SECRET
  //     , token: auth_data.oauth_token
  //     , token_secret: req_data.oauth_token_secret
  //     , verifier: auth_data.oauth_verifier
  //     }
  //   , url = 'https://api.twitter.com/oauth/access_token'
  //   ;
  // request.post({url:url, oauth:oauth}, function (e, r, body) {
  //   // ready to make signed requests on behalf of the user
  //   var perm_data = qs.parse(body)
  //     , oauth =
  //       { consumer_key: CONSUMER_KEY
  //       , consumer_secret: CONSUMER_SECRET
  //       , token: perm_data.oauth_token
  //       , token_secret: perm_data.oauth_token_secret
  //       }
  //     , url = 'https://api.twitter.com/1.1/users/show.json'
  //     , qs =
  //       { screen_name: perm_data.screen_name
  //       , user_id: perm_data.user_id
  //       }
  //     ;
  //   request.get({url:url, oauth:oauth, qs:qs, json:true}, function (e, r, user) {
  //     console.log(user)
  //   })
  // })
})
