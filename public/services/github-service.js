var app = angular.module('coderFriends');

app.service('githubService', function($http) {

	this.getFollowing = function() {
		return $http ({
			method: 'GET',
			url: '/api/github/following'
		})
	}




}); //ends Service
