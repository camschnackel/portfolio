var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngMdIcons']);
/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as hc',
    })
    .otherwise({
      redirectTo: '/'
    });


  $locationProvider.html5Mode(true);

  // $mdThemingProvider.theme('default').primaryPalette('green').accentPalette('green')

});