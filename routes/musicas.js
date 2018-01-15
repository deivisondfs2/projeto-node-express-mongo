var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.get('/',	(req,	res,	next)	=>	{
    mongoose.model('Musica').find().then((musicas) => {
        res.render('index', {
            musicas : musicas
            });
    },next);    
});

router.get('/add', (req,res,next)=>{
    res.render('add')
});

router.post('/add', (req,res,next)=>{
    var Musica = mongoose.model('Musica');
    var musica = new Musica(req.body);

    musica.save().then((result) => {
        res.redirect('/');
    },next);
});

router.get('/edit/:id', (req,res,next)=>{

});

router.put('/edit/:id',	(req,res,next)=>{

});

router.delete('/delete/:id', (req,res,next)=>{

});

module.exports = router;