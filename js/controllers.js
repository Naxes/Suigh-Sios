angular.module('starter.controllers', [])

.controller('StopNumberCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

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
