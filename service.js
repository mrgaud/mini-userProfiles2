angular.module('userProfiles').service('mainService', function($http) {


    this.getUsers = function() {
        return $http.get('https://reqres.in/api/users?page=1');
    };


});
