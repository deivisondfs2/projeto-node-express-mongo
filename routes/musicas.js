var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.get('/',	(req,	res,	next)	=>	{
    mongoose.model('Musica').find().then((musicas) => {
        res.render('index.njk', {
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
    const	{id}	=	req.params;
    mongoose.model('Musica').findOne({_id:	id}).then((musica)	=>	{
            res.render('edit.njk',	{musica:	musica});
    },next);
});


router.put('/edit/:id',	(req,res,next)=>{
    const	{id}	=	req.params;
    mongoose.model('Musica').update({_id:id},
    {
        $set:	
        {
            nome:	req.body.nome,
            artista:	req.body.artista,
            estrelas:	req.body.estrelas
        }
    }).then((musica)	=>	{
        res.redirect('/')
    },next);
});

router.get('/delete/:id', (req,res,next)=>{
    const	{id}	=	req.params;
    mongoose.model('Musica').remove({_id:	id}).then((musica)	=>	{
            res.redirect('/')
    },next);
});

module.exports = router;