var express = require('express');
var app = express();

var session = require('express-session');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');


mongoose.connect('mongodb://localhost:27017/db');
mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json({ type: '*' }));

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

var logged_in = false;

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

var userSchema = new Schema({
	Username:{type: String, unique: true},
	Password: String
}, {collection: 'users'});

var contactDB = mongoose.model('contacts',contactSchema);
var userDB = mongoose.model('users', userSchema);


//runs server on port 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Server running on port ' + app.get('port'));
});

app.get('/', function(request, response) {
  response.render('main', {
    title: 'main'
  });
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

app.get('/shop', function(request, response) {
	if(logged_in){
  		response.render('shop', {title: 'Shop',});
	}
	else{
		response.render('login',{title: 'Login',
			message: 'Please enter your login information'});
	}
});


app.get('/login', function(request, response) {
  response.render('login', {
    title: 'login',
	message: 'Please enter your login information'
  });
});

app.post('/login',function(request,response){
	var username = request.body.username;
	var password = request.body.password;

	if(username == '' || password == ''){
		response.render('login',{
			message: 'One of the fields is blank. Try again!'
		});
	}
	else{
		userDB.find({Username:username, Password:password}).then(function(results){
		if(results.length > 0){
			response.render('shop',{
				Title: 'Shop!'
			});
			logged_in = true;
		}
		else{
			response.render('login',{
				message: 'User does not exist or incorrect info! Please re-enter.'
			});
		}
	});
	}


});

app.get('/register', function(request, response) {
  response.render('register', {
    title: 'Register',
    message: 'Register for an account'
  });
});



app.post('/register', function(request,response){
	var username = request.body.username;
	var password = request.body.password;


	if(username == '' || password == ''){
		response.render('register',{
			message: 'One of the fields is blank. Try again!'
		});
	}
	else{
		var user = new userDB({Username: username, Password: password});
		user.save(function(err){
			if (err) return Error(err);
		});

		response.render('login',{
			title:'Login',
			message: 'Please enter your login information'
		});
	}

})



app.post('/contact', function(request, response){
	var fName = request.body.fName;
	var lName = request.body.lName;
	var email = request.body.Email;
	var phone = request.body.Phone;
	var subject = request.body.Subject;
	var message = request.body.Message;

	var contact = new contactDB({FirstName:fName, LastName: lName, Email: email,
		Phone: phone, Subject: subject, Message: message});

	contact.save(function (err) {
	  if (err) return Error(err);
	});

	response.render('contact',{
		title:'Contact',
		message: "Your Form has been sent!"
	});
});
