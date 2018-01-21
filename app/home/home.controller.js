(function () {
	'use strict';

	angular.module('AgroApp').controller('homeController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope) {

		var myElement = angular.element( document.querySelector( '#testDom' ) );

        console.log('fsdf', myElement)
	}]);

})();