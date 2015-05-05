var app = angular.module('coderFriends', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	// .when('/', {
	// 	templateUrl: '',
	// })

	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl',
		resolve: {
			friends: function(githubService) {
				return githubService.getFollowing();
			}
		}
	})


	.when('/friend/:github_username', {
		templateUrl: 'templates/friend.html',
	})

   .otherwise ({
   		redirectTo: '/' 
   })












}); //ends config