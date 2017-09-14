(function () {

    'use strict';

    angular.module('AgroApp').controller('mainCtrl', ['$scope', 'screenSize', function ($scope, screenSize) {
 

        //Mobile screenSize
        $scope.isShow = false;
        $scope.isMobile = screenSize.is('xs');
        $scope.isMobile = screenSize.onChange($scope, 'xs', function (isMatch) {
            $scope.isMobile = isMatch;
        });
 

    }]);
 
})();



