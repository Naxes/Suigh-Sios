angular.module('starter.controllers', [])

.controller('SeatsCtrl', function($scope, $state) {
  //populating test data for counter
  $scope.count = 0;
  $scope.capacity = 40;
  $scope.plus = function(){
    if($scope.count>=0 && $scope.count<$scope.capacity){
      $scope.count++;
    } else{
      console.log();
    }
  }

  $scope.minus = function(){
    if($scope.count>0){
      $scope.count--;
    } else{
      console.log();
    }
  }
})

.controller('RouteCtrl', function($scope) {

})

.controller('ContactCtrl', function($scope) {

})
