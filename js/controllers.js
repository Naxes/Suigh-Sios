angular.module('starter.controllers', ['ionic'])

// Controller for tab-busList
.controller('BusCtrl', function($scope, $stateParams, $ionicModal, $rootScope, $ionicPopup){
  // Brings up Seat Availability modal
  $ionicModal.fromTemplateUrl('templates/seats.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  // Variables tied to retrieved data for display in the views
  $scope.matthewsData;
  $scope.route;
  $scope.count;
  $scope.capacity;
  $scope.status;
  $scope.interval;
  $scope.statusColor;
  
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
  
  // Firebase reference to the status color value from each array object (bus)
  var statusColorRef = firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/statusColor");
  statusColorRef.on("value", function(snapshot) {
    $scope.statusColor = snapshot.val();
  });
  
  // Change seat data displayed based on bus list selection
  $scope.pos = function(busNum){
    $scope.i = busNum - 1;
    console.log($scope.i);
    
     $scope.interval = setInterval(function(){
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
  
  $scope.clearInterval = function(){
    clearInterval($scope.interval);
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
  
  // Reset seat count & update database with confirmation popup
  $scope.reset = function(seats){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Reset Seats',
      template: 'Are you sure you want to reset the seats to zero?'
    });
    confirmPopup.then(function(res){
      if (res) {
        $scope.count = 0;
        
        firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/").update({
          seats: $scope.count
        });  
      } else {
        console.log("Nevermind!")
      }
    })
  }
  
  // Set the buses status with alert popup
  $scope.option1 = function(status, statusColor){
    $ionicPopup.alert({
      title: 'Status Updated',
      template: 'Status changed to "On Time".'
    })
    $scope.status = "On Time";
    $scope.statusColor = "#31965D";
    
    firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/").update({
      status: $scope.status,
      statusColor: $scope.statusColor
    });
  }
  
  $scope.option2 = function(status, statusColor){
    $ionicPopup.alert({
      title: 'Status Updated',
      template: 'Status changed to "Late".'
    })
    $scope.status = "Late";
    $scope.statusColor = "#961227";
    
    firebase.database().ref('Matthews Coaches/routes/'+$scope.i+"/").update({
      status: $scope.status,
      statusColor: $scope.statusColor
    });
  }
  
  // Switch to Night Mode! :) 
  $rootScope.isActive = true;
  $scope.activeButton = function() {
    $rootScope.isActive = !$rootScope.isActive;
    $scope.$evalAsync();
  }
})

// Controller for tab-routes
.controller('RouteCtrl', function($scope) {

})

// Controller for tab-contact
.controller('ContactCtrl', function($scope, $rootScope) {

})