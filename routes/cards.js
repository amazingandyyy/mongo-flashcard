'use strict';

var express = require('express');
var router = express.Router();
var Card = require('../models/card')

router.get('/', (err, res) => {
    Card.find({}, (err, trees) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(trees); // always give me an array
    });
});
router.post('/', (req, res) => {
    var card = new Card(req.body);
    card.save((err, newCard) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(newCard);
    });
});
router.get('/:id', (req, res) => {
    var cardId = req.params.id;
    Card.findById(cardId, (err, card) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(card); // always give me an object
    });
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

module.exports = router;
