angular.module('userProfiles').controller('MainController', function($scope, mainService) {
    $scope.test = "still alive"
  $scope.getUsers = function() {
  	$scope.users = mainService.getUsers().then(function(response){
        $scope.users=response.data.data
    });
  }


  $scope.getUsers();

});
