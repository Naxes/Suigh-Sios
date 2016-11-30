angular.module('starter.controllers', [])

// Controller for tab-stopNumber
.controller('StopNumberCtrl', function($scope, $stateParams){

})

// Controller for tab-seats
.controller('SeatsCtrl', function($scope, $state) {
  $scope.count;
  $scope.capacity;
  
  // Reference first entry in Firebase Database & display data
  var seatRef = firebase.database().ref('buses/0/seats/');
  seatRef.on("value", function(snapshot) {
    console.log(snapshot.val());
    $scope.count = snapshot.val();
    $scope.$evalAsync();
  });
  
  var capacityRef = firebase.database().ref('buses/0/capacity/');
  capacityRef.on("value", function(snapshot) {
    console.log(snapshot.val());
    $scope.capacity = snapshot.val();
    $scope.$evalAsync();
  });
  
  // Increment seat count & update database
  $scope.plus = function(capacity, seats){
    if($scope.count>=0 && $scope.count<$scope.capacity){
      $scope.count++;
    }else{
      console.log();
    }
    
    firebase.database().ref('buses/0/').set({
        capacity: $scope.capacity,
        seats: $scope.count
    });
  }
  
  // Subtract seat count & update database
  $scope.minus = function(capacity, seats){
    if($scope.count>0){
      $scope.count--; 
    }else{
      console.log();
    }
    
    firebase.database().ref('buses/0/').set({
        capacity: $scope.capacity,
        seats: $scope.count
    }); 
  }

  $scope.reset = function(capacity, seats){
    $scope.count = 0;
    firebase.database().ref('buses/0/').set({
        capacity: $scope.capacity,
        seats: $scope.count
    });  
  }
})

// Controller for tab-routes
.controller('RouteCtrl', function($scope) {

})

// Controller for tab-contact
.controller('ContactCtrl', function($scope) {

})