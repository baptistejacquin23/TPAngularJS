'use strict';

let myModule = angular.module('myApp');

myModule.directive('personnes', [function () {
    return {
        templateUrl: '/graphics/personne.html',
        scope: {
            personnes: '=lespersonnes'
        },
        link: function (scope, element, attrs) {
            scope.selectPersonne = function (activePersonne) {
                scope.personneInfo = activePersonne;
            }
        }
    };
}]);