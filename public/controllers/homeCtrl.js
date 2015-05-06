var app = angular.module('coderFriends');


app.controller('homeCtrl', function($scope, friends, githubService, eventdata) {

	$scope.friends = friends.data;
    
    $scope.eventData = eventdata;

     
}); //ends controller