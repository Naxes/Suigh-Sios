angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.stopNumber', {
    url: '/stopNumber',
    views: {
      'tab-stopNumber': {
        templateUrl: 'templates/tab-stopNumber.html',
        controller: 'StopNumberCtrl'
      }
    }
  })
  
  .state('tab.seats', {
    url: '/seats',
    views: {
      'tab-seats': {
        templateUrl: 'templates/tab-seats.html',
        controller: 'SeatsCtrl'
      }
    }
  })

  .state('tab.route', {
      url: '/route',
      views: {
        'tab-route': {
          templateUrl: 'templates/tab-route.html',
          controller: 'RouteCtrl'
        }
      }
    })

  .state('tab.contact', {
    url: '/contact',
    views: {
      'tab-contact': {
        templateUrl: 'templates/tab-contact.html',
        controller: 'ContactCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/stopNumber');
});