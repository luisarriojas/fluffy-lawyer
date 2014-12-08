'use strict';

var flControllers = angular.module('flControllers', []);

flControllers.controller('flCtrl', ['$scope', 'Meta',
    function($scope, Meta) {
        $scope.flMeta = Meta.tags;
    }
]);

flControllers.controller('readCtrl', ['$scope', 'Meta', '$http', '$routeParams', '$sce',
    function($scope, Meta, $http, $routeParams, $sce) {
        $scope.flMeta = Meta.tags;
        $scope.flMeta.title = "Loading document...";

        //retrieve document to evaluate (TOS, Privacy Terms...)
        $http({
            method: "GET",
            url: "documents/" + $routeParams.file
        }).success(function(data) {
            $scope.document = data;
            $scope.document.videoTrusted = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + $scope.document.video);
            $scope.flMeta.title = data.title;
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
            $scope.score = ((points / $scope.document.questions.length).toFixed(4)) * 100;
            //this shows a success or fail message
            if ($scope.score >= $scope.document.minimumScore) {
                $scope.scorePassed = true;
                $scope.scoreFailed = false;
            } else {
                $scope.scorePassed = false;
                $scope.scoreFailed = true;
            }
        };
    }
]);