angular.module('starter.controllers', [])

// Controller for tab-stopNumber
.controller('StopNumberCtrl', function($scope, $stateParams){

})

// Controller for tab-seats
.controller('SeatsCtrl', function($scope, $state) {
  // Populating test data for counter
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

  $scope.reset = function(){
    $scope.count = 0;
  }
})

// Controller for tab-routes
.controller('RouteCtrl', function($scope) {

})

// Controller for tab-contact
.controller('ContactCtrl', function($scope) {

})