'use strict';

var flApp = angular.module('flApp', ['ngRoute', 'flControllers', 'flServices']);

/* router */
flApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        }).
        when('/read/:id', {
            templateUrl: 'templates/read.html',
            controller: 'readCtrl'
        }).
        when('/end', {
            templateUrl: 'templates/end.html',
            controller: 'endCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);

/* fix to crawlers */
flApp.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);

/* services */
var flServices = angular.module('flServices', []);
flServices.factory('Meta', [

    function() {
        return {
            tags: {
                title: ''
            }
        }
    }
]);
flServices.factory('Alert', [

    function() {
        return {
            tags: {
                message: '',
                type: ''
            }
        }
    }
]);