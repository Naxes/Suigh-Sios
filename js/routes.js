angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'RouteCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.routes', {
    url: '/routes',
    views: {
      'tab-routes': {
        templateUrl: 'templates/tab-routes.html',
        controller: 'RouteCtrl'
      }
    }
  })

  .state('tab.map', {
      url: '/map',
      views: {
        'tab-map': {
          templateUrl: 'templates/tab-map.html',
          controller: 'MapCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'RouteCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/routes');
});