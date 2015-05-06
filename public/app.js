var app = angular.module('coderFriends', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider

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
		resolve: {
			eventdata: function(githubService) {
				return githubService.getFriendActivity($route.current.params.github_username);
		}
	})

   .otherwise ({
   		redirectTo: '/' 
   })












}); //ends config