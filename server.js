var express = require('express');
var app = express();

var session = require('express-session');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.engine('pug', require('pug').__express)
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.set('trust-proxy', true);
app.use(session({
   genid: function(request) {
      return uuid();
   },
   resave: false,
   saveUninitialized: false,
   //cookie: {secure: true},
   secret: 'red october',
}));

//runs server on port 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Server running on port ' + app.get('port'));
});

app.get('/about', function(request, response) {
  response.render('about', {
    title: 'About'
  });
});

app.get('/portfolio', function(request, response) {
  response.render('portfolio', {
    title: 'Portfolio'
  });
});

app.get('/contact', function(request, response) {
  response.render('contact', {
    title: 'Contact'
  });
});

app.get('/infvis', function(request, response) {
  response.render('infvis', {
    title: 'InfiniteVision'
  });
});
