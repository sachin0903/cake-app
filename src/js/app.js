    var cakeApp = angular.module('cakeApp', ['ngAria','ngAnimate','ui.router','ngMaterial',]);

    cakeApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl: 'js/components/cake-gallery/cake-gallery.html',
            controller: 'CakeCtrl'
        });

        $locationProvider.html5Mode(true);
    });