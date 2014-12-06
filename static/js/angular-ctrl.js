'use strict';

var flControllers = angular.module('flControllers', []);

flControllers.controller('flCtrl', ['$scope', 'Meta', 'Alert',
    function($scope, Meta, Alert) {
        $scope.flMeta = Meta.tags;
        $scope.flAlert = Alert.tags;

        $scope.closeAlert = function() {
            $scope.flAlert.message = '';
        };
    }
]);

flControllers.controller('homeCtrl', ['$scope', 'Meta',
    function($scope, Meta) {
        $scope.flMeta = Meta.tags;
        $scope.flMeta.title = "Home";
    }
]);

flControllers.controller('readCtrl', ['$scope', 'Meta', 'Alert', '$http', '$routeParams', '$location',
    function($scope, Meta, Alert, $http, $routeParams, $location) {
        $scope.flMeta = Meta.tags;
        $scope.flMeta.title = "Loading document...";

        $scope.flAlert = Alert.tags;

        //retrieve document to evaluate (TOS, Privacy Terms...)
        $http({
            method: "GET",
            url: "/read",
            params: {
                id: $routeParams.id
            }
        }).success(function(data) {
            if (data.error == 'Document not found') {
                $scope.flAlert.message = data.error;
                $scope.flAlert.type = "alert";
                $location.path("home");
            } else {
                $scope.document = data;
                $scope.flMeta.title = data.title;
            }
        });

        //answer manager
        $scope.result = [];
        $scope.chooseOption = function(question, answer) {
            angular.forEach($scope.result, function(value, key) {
                if (value.question == question) {
                    $scope.result.splice(key, 1);
                }
            });

            $scope.result.push({
                question: question,
                answer: answer
            });
        };

        //check score
        $scope.checkScore = function() {
            var points = 0;
            $scope.scorePassed = false;
            $scope.scoreFailed = false;
            //this calculates user's score
            angular.forEach($scope.result, function(value, key) {
                if (value.answer == true) {
                    points += 1;
                }
            });
            $scope.score = (points / $scope.document.questions.length).toFixed(4);
            //this shows a success or fail message
            if ($scope.score >= $scope.document.minimumScore) {
                $scope.scorePassed = true;
                $scope.scoreFailed = false;
                $http({
                    method: "POST",
                    url: "/scoreSave"
                });
            } else {
                $scope.scorePassed = false;
                $scope.scoreFailed = true;
            }
        };
    }
]);

flControllers.controller('endCtrl', ['$scope', 'Meta', 'Alert', '$http', '$location',
    function($scope, Meta, Alert, $http, $location) {
        $scope.flMeta = Meta.tags;
        $scope.flMeta.title = "End";

        $scope.flAlert = Alert.tags;

        $http({
            method: "GET",
            url: "/scoreGet"
        }).success(function(data) {
            if (data.result == 'Test not passed') {
                $scope.flAlert.message = data.result;
                $scope.flAlert.type = "alert";
                $location.path("home");
            }
        });
    }
]);