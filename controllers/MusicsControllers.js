var mongoose = require('mongoose');
var Music = mongoose.model('Music');

var musicsController = {};

musicsController.findMusics = (req, res, next) =>{
    mongoose.model('Music').find().then((musics) => {
        res.render('index.njk', {
            musics : musics
            });
    },next);  
};

musicsController.create = (req, res, next) =>{
    res.render('add');
};

musicsController.doCreate = (req, res, next) =>{
    var Music = mongoose.model('Music');
    var Music = new Music(req.body);

    Music.save().then((result) => {
        res.redirect('/');
    },next);
};

musicsController.change = (req, res, next) =>{
    const {id} = req.params;
    mongoose.model('Music').findOne({_id:	id}).then((music)	=>	{
            res.render('edit.njk',	{music:	music});
    },next);
};

musicsController.doChange = (req, res, next) =>{
    const	{id}	=	req.params;
    mongoose.model('Music').update({_id:id},
    {
        $set:	
        {
            nome:	req.body.nome,
            artista:	req.body.artista,
            estrelas:	req.body.estrelas
        }
    }).then((music)	=>	{
        res.redirect('/')
    },next);
};

musicsController.remove = (req, res, next) =>{
    const	{id}	=	req.params;
    mongoose.model('Music').remove({_id:	id}).then((music)	=>	{
            res.redirect('/')
    },next);
};

module.exports = musicsController;