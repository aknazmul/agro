(function () {

    'use strict';

    angular.module('AgroApp').controller('mainCtrl', ['$scope', '$rootScope', '$location', 'screenSize', function ($scope, $rootScope, $location, screenSize) {
        
        $scope.location = $location.path();
        $rootScope.$on('$routeChangeSuccess', function() {
            $scope.location = $location.path();
        });

        //Mobile screenSize
        $scope.isShow = false;
        $scope.isMobile = screenSize.is('xs');
        $scope.isMobile = screenSize.onChange($scope, 'xs', function (isMatch) {
            $scope.isMobile = isMatch;
        });
 

    }]);
 
})();
