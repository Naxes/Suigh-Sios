angular.module('starter.controllers', [])

// Controller for tab-busList
.controller('BusCtrl', function($scope, $stateParams, $ionicModal){
  // Brings up Seat Availability modal
  $ionicModal.fromTemplateUrl('templates/seats.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  // Variables tied to retrieved data for display in the views
  $scope.matthewsData; // The array of object (buses) for Matthews Coaches
  $scope.route;
  $scope.count;
  $scope.capacity;
  
  // Change this variable to switch between the buses in the database array
  $scope.i = 0;
  
  // Firebase reference to the array of objects (buses)
  var matthewsRef = firebase.database().ref('Matthews Coaches/routes/');
  matthewsRef.on("value", function(snapshot, index){
    // Assigns matthewsData as the array of objects (buses)
    $scope.matthewsData = snapshot.val();
    $scope.$evalAsync();
  });
  
  // Firebase reference to the bus capacity value from each array object (bus)
  var capacityRef = firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/capacity");
  capacityRef.on("value", function(snapshot) {
    $scope.capacity = snapshot.val();
  });
  
  // Change seat data displayed based on bus list selection
  $scope.pos = function(busNum){
    $scope.i = busNum - 1;
    console.log($scope.i);
     setInterval(function(){
      var seatUpdateRef = firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/seats");
      seatUpdateRef.on("value", function(snapshot) {
        $scope.count = snapshot.val();
        $scope.$evalAsync();
      })  
    }, 4)
      
    var busUpdateRef = firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/route");
    busUpdateRef.on("value", function(snapshot) {
      $scope.route = snapshot.val();
    })
  }
  
  // Increment seat count & update database
  $scope.plus = function(seats){
    if($scope.count>=0 && $scope.count<$scope.capacity){
      $scope.count++;
    }else{
      console.log();
    }
    
    firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/").update({
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
    
    firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/").update({
      seats: $scope.count
    });
  }
  
  // Reset seat count & update database
  $scope.reset = function(seats){
    $scope.count = 0;
    
    firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/").update({
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