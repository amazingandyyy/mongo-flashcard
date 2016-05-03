'use strict';

var app = angular.module('myApp');
app.controller('homeCtrl', function() {
    console.log('homeCtrl loaded');
});

app.controller('createCtrl', function($scope, Cards) {
    console.log('createCtrl loaded');

    Cards.getAll()
        .then(function(cards) {
            // console.log('cards', cards);
            $scope.cards = cards.data.reverse();
        }, function(err) {
            console.log('err when get all cards: ', err);
    });

    $scope.addnewCard = () => {
        console.log('$scope.newCard; ',$scope.newCard);
        Cards.create($scope.newCard)
            .then(function(res) {
                console.log('card', res.data);
                $scope.cards.unshift(res.data)
                $scope.newCard = [];
            }, function(err) {
                console.log('err when get all cards: ', err);
            })
    }


    $scope.sortBy = (order) => {
        if ($scope.order === order) {
            $scope.order = `-${order}`;
        } else {
            $scope.order = order;
        }
    }
});

app.controller('readCtrl', function(Cards, $scope) {
    console.log('readCtrl loaded');
    var cardList;
    var index = 0;
    Cards.getAll()
        .then(function(cards) {
             cardList = cards.data.reverse();
            console.log('cardList: ',cardList);
            console.log('cardList1: ',cardList[index]);
        })
        .then(function(){
            $scope.currentCard = cardList[index];
            $scope.nextCard = () => {
                index++
                if(index>cardList.length-1){
                    index = 0;
                }
                $scope.currentCard = cardList[index];
                console.log('index: ', index);

                $scope.currentCard.show = false;
            }
            $scope.answerShow = () => {
                $scope.currentCard.show = !$scope.currentCard.show;
            }
        })
        .catch(function(err) {
            console.log('err when get all cards: ', err);
        })
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
