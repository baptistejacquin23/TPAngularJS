'use strict';

angular.module('myApp').directive('personneform', [function () {
    return {
        templateUrl: '/graphics/formpersonnedirective.html',
        scope: {
            personnedata: '=personneformdata'
        },
        link: function (scope, element, attrs) {
            scope.$watch(()=>scope.personnedata, function () {
                scope.mapersonne = angular.copy(scope.personnedata);
            }),
            scope.valider = function () {
                angular.copy(scope.mapersonne,scope.personnedata);
            },
            scope.annuler = function () {
                scope.mapersonne = angular.copy(scope.personnedata)
            }
        }
    };
}]);