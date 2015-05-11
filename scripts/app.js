'use strict';

/**
 * @ngdoc overview
 * @name tooglesApp
 *
 * Main module of the application.
 */
var tooglesApp = angular.module('tooglesApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/browse', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/home', { templateUrl: 'views/home.html', controller: 'ListCtrl' });    
    $routeProvider.when('/browse/:category', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/search/:query', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/view/:id', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/view/:id/:starttime', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/playlist/:id', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/playlist/:id/:start', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/user/:username', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/user/:username/:feed', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
<<<<<<< HEAD
    $routeProvider.otherwise({ redirectTo: '/browse' });
  }]);
=======
    $routeProvider.otherwise({ redirectTo: '/home' });
  }]);
>>>>>>> f117e5b30713b78b56111f6b145fab4e2a6572b4
