/*angular.module('starter.directives', [])

.directive('blankDirective', [function(){

}]);*/

angular.module('starter.directives', [])

.directive('activePageHighlight', ['$rootScope', '$state', function($rootScope, $state){

   return function ($scope, $element, $attr) {
       
     function checkUISref(){
       if ($state.is($attr['uiSref'])){
             $element.addClass('active-page-highlight');
         } else {
             $element.removeClass('active-page-highlight');
         }
     }
     
     checkUISref();
       
     $rootScope.$on('$stateChangeSuccess', function(){
         checkUISref();
     })
   }
}])

// Google Maps API
.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var myLatLng = new google.maps.LatLng(53.348781, -6.242773)
        var mapOptions = {
            center: myLatLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});