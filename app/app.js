'use strict';
let module = angular.module('myApp', []);

// Declare app level module which depends on views, and core components
module
    .controller('MainController', ['$scope', function ($scope){
        $scope.prenom = 'Baptiste';
        $scope.nom = 'Jacquin';
        $scope.personnes=[{
            prenom: 'Thibaut',
            nom: 'Montanier'
        },
        {
            prenom: 'Charlotte', nom: '🍓'
        },
        {
            prenom: 'Sophie',
            nom: '🦒🦒🦒'
        }]
    }]);

module
    .filter('currencyFR', ['numberFilter', function(numberFilter){
        return function(input, symbol, nbDecimales){
        if(isNaN(input)){
            return input;
        } else{
            symbol = symbol || "€" ;
            input = numberFilter(input,isNaN(nbDecimales) ? 2 : nbDecimales );
            return input + ' ' + symbol;
        }
        };
    }]);



/*config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
