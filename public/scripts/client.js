var app = angular.module('studentApp', []);

app.controller('ListController', function($scope, $http){
  $scope.students = [];
  $scope.clicked = false;

  $scope.showList = function() {
    $http.get('/students').then(function(response){
      $scope.students = response.data;
      console.log('Success: ', response);
    }, function(response){
      console.log('Failure: ', response);
    })

    $scope.clicked = true
  }

});
