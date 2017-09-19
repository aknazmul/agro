(function () {

    'use strict';

    angular.module('AgroApp').controller('mainCtrl', ['$scope', '$rootScope', '$state', '$location', 'screenSize', function ($scope, $rootScope, $state, $location, screenSize) {
        
        $rootScope.$state = $state;

        //Mobile screenSize
        $scope.isShow = false;
        $scope.isMobile = screenSize.is('xs');
        $scope.isMobile = screenSize.onChange($scope, 'xs', function (isMatch) {
            $scope.isMobile = isMatch;
        });
 

    }]);
 
})(); 