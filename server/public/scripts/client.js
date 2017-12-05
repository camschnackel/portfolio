var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons']);
/// Routes ///
myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
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

  $mdThemingProvider.theme('default').primaryPalette('green').accentPalette('green')

});