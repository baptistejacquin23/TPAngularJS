'use strict';

angular.module('myApp').directive('personneslistdetail', [function () {
    return {
        templateUrl: '/graphics/personnelistdirective.html',
        scope: {
            personnedata: '=personnedetail'
        },
    };
}]);