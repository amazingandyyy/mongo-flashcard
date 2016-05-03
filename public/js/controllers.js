'use strict';

var app = angular.module('myApp');
app.controller('homeCtrl', function() {
    console.log('homeCtrl loaded');
});



app.controller('createCtrl', function($scope, Cards) {
    console.log('createCtrl loaded');

    Cards.getAll()
        .then(function(cards) {
            console.log('cards', cards);
            $scope.cards = cards.data;
        }, function(err) {
            console.log('err when get all cards: ', err);
        })
    //
    $scope.sortBy = (order) => {
        if ($scope.order === order) {
            $scope.order = `-${order}`;
            // document.getElementById(`${order}Scaret`).style.transform = "rotate(0deg)";
        } else {
            $scope.order = order;
            // document.getElementById(`${order}Scaret`).style.transform = "rotate(180deg)";
        }
    }
    //
    // $scope.addNewcard = () => {
    //     $scope.cards.push($scope.newcard);
    //     $scope.newcard = [];
    // }

});
//
// app.controller('detailCtrl', function($stateParams, $scope) {
//     console.log('detailCtrl loaded');
//     var id = $stateParams.id;
//     $scope.card = cards[id];
//     $scope.card.id = id;
//     $scope.editcard = (id) => {
//         console.log('iddd: ', id);
//         $scope.edittedcard = angular.copy(cards[id]);
//     }
//     $scope.deletecard = (id) => {
//         console.log('iddd: ', id);
//         cards.splice(id,1);
//     }
//     $scope.updateOldcard = (id) => {
//         console.log('updateOldcard: ', id);
//         console.log('$scope.edittedcard: ', $scope.edittedcard);
//         cards[id] = $scope.edittedcard;
//         $scope.card =$scope.edittedcard;
//         $scope.edittedcard= null;
//     }
//     $scope.cancelClick = () => {
//         $scope.edittedcard= null;
//     }
// });
// app.controller('summaryCtrl', function($stateParams, $scope) {
//     console.log('summaryCtrl loaded');
//     $scope.totalNum = () => {
//         return cards.length;
//     }
//     $scope.totalValue = () => {
//         var total = 0;
//         for (var i = 0; i < cards.length; i++) {
//             total += cards[i].price;
//         }
//         return Math.round(total*100)/100;
//     }
// });
