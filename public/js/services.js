'use strict';

var app = angular.module('myApp');

app.service('Cards', function($http) {
    this.getAll = () => {
        return $http.get('/api/cards/');
    }
    this.create = (newCard) => {
        return $http({
            method: 'POST',
            url: '/api/cards/',
            data: newCard
        });
    }
});
