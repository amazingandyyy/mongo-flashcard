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
        console.log('$scope.newCard; ', $scope.newCard);
        Cards.create($scope.newCard)
            .then(function(res) {
                console.log('card', res.data);
                $scope.cards.unshift(res.data)
                $scope.newCard = null;
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


    $scope.editCard = (index, id) => {
        console.log('id clicked: ', id);
        console.log('index: ', index);
        $scope.edditedCardId = index;
        $scope.edditedCard = angular.copy($scope.cards[index]);
    }
    $scope.cancelClicked = () => {
        $scope.edditedCardId = null;
    }
    $scope.deleteOne = (id, index) => {
        // console.log('id: ', id);
        // console.log("$scope.cards: ", $scope.cards);
        Cards.delete(id)
            .then(function(res) {
                console.log('card', res.data);
                $scope.cards.splice(index, 1);
                $scope.edditedCardId = null;
            }, function(err) {
                console.log('err when deleting card: ', err);
            })
    }
    $scope.editOne = (id, index) => {
        console.log('id: ', id);
        Cards.update(id, $scope.edditedCard)
            .then(function(res) {
                // console.log('card', res.data);
                $scope.cards[index] = $scope.edditedCard;
                $scope.edditedCardId = null;
            }, function(err) {
                console.log('err when editting cards: ', err);
            })
    }
});

app.controller('readCtrl', function(Cards, $scope) {
    console.log('readCtrl loaded');
    var cardList;
    var index = 0;
    $scope.filterRead = (category) => {
        console.log("category: ", category);
        Cards.getAllByCategory(category)
            .then(function(cards) {
                cardList = cards.data.reverse();
                console.log('cardList: ', cardList);
                $scope.currentCard = cardList[index];
            })
            .then(function() {

                $scope.nextCard = () => {
                    index++
                    if (index > cardList.length - 1) {
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
    }

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
