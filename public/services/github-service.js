var app = angular.module('coderFriends');

app.service('githubService', function($http) {

	this.getFollowing = function() {
		return $http ({
			method: 'GET',
			url: '/api/github/following'
		})
	}

     this.getFriendActivity = function(username) {
     	var q = q.defer();
     	var url: 'https://api.github.com/users/' + username+ '/events';
     	return $http ({
     		method: 'GET',
     		url: url
     	}). then (function(res) {
     		

     	})
     }


}); //ends Service
