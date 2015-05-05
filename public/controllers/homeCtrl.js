var app = angular.module('coderFriends');


app.controller('homeCtrl', function($scope, friends) {

	$scope.friends = friends.data;

}); //ends controller