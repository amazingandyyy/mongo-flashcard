'use strict';

var app = angular.module('myApp');

app.service('Cards', function($http) {
    this.allCards;

    this.getAll = () => {
        // var cards = this.allCards || $http.get('/api/cards/');
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
