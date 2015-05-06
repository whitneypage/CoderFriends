var app = angular.module('coderFriends');


app.controller('homeCtrl', function($scope, friends, githubService, $location) {

	$scope.friends = friends.data;
    
    $scope.eventData = eventdata;

}); //ends controller