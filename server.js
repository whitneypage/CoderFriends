var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var GitHubApi = require('github');

var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use(session ({
	secret: '123hiuehkirwh43',
	saveUninitialized: false,
	resave: true
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new GitHubStrategy ({
	clientID:'e755a403787a1623ee23',
	clientSecret: '34d235bdbe1d4dd7de02d5e379ae9351758db9bd',
	callbackURL: 'http://localhost:9000/auth/github/callback'

}, 
	function(accessToken, refreshToken, profile, done) {
			return done(null, profile)
	}
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


var github = new GitHubApi ({
	version: '3.0.0'
})



app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/'}),
	function(req, res) {
		res.redirect('/#/home');
	});

var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
}

app.get('/api/github/following', requireAuth, function(req, res) {
	console.log(req.user);
	github.user.getFollowingFromUser ({
			user: req.user.username
		}, function(err, x) {
			if(!err) {
				res.json(x)
			} else {
				res.status(500).json
			}
		})
});

app.get('api/github/:username/activity',requireAuth, function(req, res) {
	github.user.getFriendActivity ({
		user: req.params.username;
	}, function(err, response) {
		res.json(response)
	})
	

});


app.listen(9000);





