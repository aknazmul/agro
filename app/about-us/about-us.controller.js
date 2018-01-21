(function () {
	'use strict';

	angular.module('AgroApp').controller('aboutUsController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope) {

		var myElement = angular.element( document.querySelector( '#testDom' ) );
		var myinhtml = angular.element( document.querySelector( '#testDom' ).innerHTML );

        console.log('fsdf', myElement )
        console.log('html....', myinhtml[0] )
	}]);

})();