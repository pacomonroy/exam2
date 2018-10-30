angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('aapl', {
    url: '/page2',
    templateUrl: 'templates/aapl.html',
    controller: 'aaplCtrl'
  })

  .state('ge', {
    url: '/page3',
    templateUrl: 'templates/ge.html',
    controller: 'geCtrl'
  })

  .state('sbux', {
    url: '/page4',
    templateUrl: 'templates/sbux.html',
    controller: 'sbuxCtrl'
  })

  .state('wba', {
    url: '/page6',
    templateUrl: 'templates/wba.html',
    controller: 'wbaCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});