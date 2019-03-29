var express = require('express');
var app = express();

var session = require('express-session');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');

mongoose.connect('mongodb://localhost:27017/db');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.engine('pug', require('pug').__express)
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

var db = mongoose.connection;
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	FirstName: String,
	LastName: String,
	Email: String,
	Phone: String,
	Subject: String,
	Message: String
}, {collection: 'contacts'});

var contactDB = mongoose.model('contacts',contactSchema);



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
app.use(bodyParser.json({ type: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/contact', function(request, response){
	var fName = request.body.fName;
	var lName = request.body.lName;
	var email = request.body.Email;
	var phone = request.body.Phone;
	var subject = request.body.Subject;
	var message = request.body.Message;

	// var contact = new ContactDB({FirstName:fName, LastName: lName, Email: email,
	// 	Phone: phone, Subject: subject, Message: message});
	//
	// db.collection('contactSchema').insert(contact);
	console.log(request);
	console.log(request.body);
	console.log(fName,lName,email,phone,subject,message);
});

app.get('/infvis', function(request, response) {
  response.render('infvis', {
    title: 'InfiniteVision'
  });


});
