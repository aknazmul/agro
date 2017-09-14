(function () {
    'use strict';
    angular.module('AgroApp')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
             $locationProvider.hashPrefix('');
             $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '../app/home/home.html',
                    controller: "homeController"
                }) 
                .state('about-us', {
                    url: '/about-us',
                    templateUrl: '../app/about-us/about-us.html',
                    controller: "aboutUsController"
                }) 
                // .state('otherwise', {
                //     url: '/',
                //     templateUrl: '../app/home/home.html',
                //     controller: "homeController"
                // });
        });
})();
