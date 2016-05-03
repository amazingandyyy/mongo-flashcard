'use strict';

var app = angular.module('myApp', ['ui.router']);

// localStorage.ngProductsList = [{'name': 'andy'}, {'yo': 'dd'}];
// console.log('ddd: ', JSON.parse(localStorage.ngProductsList));

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
        .state('create', {
            url: '/create',
            templateUrl: '../views/create.html',
            controller: 'createCtrl'
        })
        .state('read', {
            url: '/read/',
            templateUrl: '../views/read.html',
            controller: 'readCtrl'
        })

    $urlRouterProvider.otherwise('/');

});
