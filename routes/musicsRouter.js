var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var musicsController = require('../controllers/MusicsControllers');

router.get('/',	musicsController.findMusics);

router.get('/add', musicsController.create);

router.post('/add', musicsController.doCreate);

router.get('/edit/:id', musicsController.change);

router.put('/edit/:id', musicsController.doChange);

router.get('/delete/:id', musicsController.remove);

module.exports = router;