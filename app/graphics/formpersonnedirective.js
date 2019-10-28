'use strict';

angular.module('myApp').directive('personneform', [function () {
    return {
        templateUrl: '/graphics/formpersonnedirective.html',
        scope: {
            personnedata: '=personnedetail'
        },
    };
}]);