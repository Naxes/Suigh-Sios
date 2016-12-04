angular.module('starter.controllers', [])

// Controller for tab-stopNumber
.controller('StopNumberCtrl', function($scope, $stateParams){
  $scope.matthewsData;
  
  var matthewsRef = firebase.database().ref('Matthews Coaches/routes/');
  matthewsRef.on("value", function(snapshot){
    console.log(snapshot.val());
    $scope.matthewsData = snapshot.val();
    $scope.$evalAsync();
  });
})

// Controller for tab-seats
.controller('SeatsCtrl', function($scope, $state) {
  // Global variables for seat count and static data to equal itself when pushing to the database
  $scope.busNum;
  $scope.count;
  $scope.capacity;
  
  // Reference first entry in Firebase Database & display data (Hard coded test)
  var seatRef = firebase.database().ref('Matthews Coaches/routes/0/seats');
  seatRef.on("value", function(snapshot) {
    console.log(snapshot.val());
    $scope.count = snapshot.val();
    $scope.$evalAsync();
  });
  
  var capacityRef = firebase.database().ref('Matthews Coaches/routes/0/capacity/');
  capacityRef.on("value", function(snapshot) {
    console.log(snapshot.val());
    $scope.capacity = snapshot.val();
    $scope.$evalAsync();
  });
  
  // Increment seat count & update database
  $scope.plus = function(seats){
    if($scope.count>=0 && $scope.count<$scope.capacity){
      $scope.count++;
    }else{
      console.log();
    }
    
    firebase.database().ref('Matthews Coaches/routes/0/').update({
      seats: $scope.count
    });
  }
  
  // Subtract seat count & update database
  $scope.minus = function(seats){
    if($scope.count>0){
      $scope.count--; 
    }else{
      console.log();
    }
    
     firebase.database().ref('Matthews Coaches/routes/0/').update({
      seats: $scope.count
    });
  }
  
  // Reset seat count & update database
  $scope.reset = function(seats){
    $scope.count = 0;
    
     firebase.database().ref('Matthews Coaches/routes/0/').update({
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