'use strict';

var app = angular.module('myApp');

app.service('Cards', function($http) {
    this.allCards;

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
    this.delete = (id) => {
        return $http({
            method: 'DELETE',
            url: `/api/cards/${id}`
        });
    }
    this.update = (id, edditedCard) => {
        return $http({
            method: 'PUT',
            url: `/api/cards/${id}`,
            data: edditedCard
        });
    }
    this.getAllByCategory = (category) => {
        return $http({
            method: 'GET',
            url: `/api/cards/${category}`
        });
    }
});
