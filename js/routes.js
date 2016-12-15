angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'BusCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.busList', {
    url: '/busList',
    views: {
      'tab-busList': {
        templateUrl: 'templates/tab-busList.html',
        controller: 'BusCtrl'
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
        controller: 'BusCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/busList');
});