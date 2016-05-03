'use strict';

var express = require('express');
var router = express.Router();
var Card = require('../models/card')

router.get('/', (err, res) => {
    Card.find({}, (err, cards) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(cards); // always give me an array
    });
});
router.post('/', (req, res) => {
    var newCard = new Card(req.body);
    newCard.save((err, card) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(card);
    });
});
router.get('/:category', (req, res) => {
    var category = req.params.category;
    console.log('category: ', category);
    Card.find({cate: category}, (err, cards)=>{
        if (err) return res.status(400).send('errr: ', err);
        res.send(cards);
    })
});
router.put('/:id', (req, res) => {
    var cardId = req.params.id;
    var updateInfo = req.body;
    Card.findByIdAndUpdate(cardId, {$set: updateInfo}, (err, card) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(card); // always give me an object
    });
});
router.delete('/:id', (req, res) => {
    var cardId = req.params.id;
    Card.findByIdAndRemove(cardId, (err) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(); // always give me an object
    });
});
router.delete('/', (req, res) => {
    Card.remove({}, (err, cards) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(cards); // always give me an array
    });
});

module.exports = router;
