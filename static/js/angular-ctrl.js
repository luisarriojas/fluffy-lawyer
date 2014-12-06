'use strict';

var flControllers = angular.module('flControllers', []);

flControllers.controller('flCtrl', ['$scope', 'Meta',
    function($scope, Meta) {
        $scope.flMeta = Meta.tags;
    }
]);

flControllers.controller('homeCtrl', ['$scope', 'Meta', '$http',
    function($scope, Meta, $http) {
        $scope.flMeta = Meta.tags;
        $scope.flMeta.title = "Home";


    }
]);

flControllers.controller('aboutCtrl', ['$scope', 'Meta', '$routeParams',
    function($scope, Meta, $routeParams) {
        $scope.flMeta = Meta.tags;
        $scope.flMeta.description = "Todo en amortiguadores, ballestas y espirales. Envíos a nivel nacional. Valencia, Venezuela.";
        $scope.flMeta.title = "About";

        $scope.aboutContent = $routeParams.message;
    }
]);