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
                .state('services', {
                    url: '/services',
                    templateUrl: '../app/services/services.html',
                    controller: "servicesController"
                }) 
                .state('product', {
                    url: '/product',
                    templateUrl: '../app/product/product.html',
                    controller: "productController"
                }) 
                .state('contact', {
                    url: '/contact',
                    templateUrl: '../app/contact/contact.html',
                    controller: "contactController"
                }) 
                .state('otherwise', {
                    url: '/',
                    data: {
                    bodyClass: 'hide-innerpage'
                    }
                    // templateUrl: '../index.html'
                });
        });
})();
