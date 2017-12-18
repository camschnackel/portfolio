var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngMdIcons']);
/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'AboutController as ac',
    })
    .otherwise({
      redirectTo: '/about'
    });


  $locationProvider.html5Mode(true);

  // $mdThemingProvider.theme('default').primaryPalette('green').accentPalette('green')

});