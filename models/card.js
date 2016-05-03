'use strict';

var mongoose = require('mongoose');

var Card = mongoose.model('Card', {
    question: String,
    answer: String,
    level: String,
    cate: String,
    correct: Number
});

module.exports = Card;
