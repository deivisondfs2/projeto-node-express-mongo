var express = require('express');
var router = express.Router();

router.get('/',	(req,	res,	next)	=>	{
    res.render('index');
});

router.get('/add', (req,res,next)=>{

});
router.post('/', (req,res,next)=>{

});

router.get('/edit/:id', (req,res,next)=>{

});

router.put('/edit/:id',	(req,res,next)=>{

});

router.delete('/delete/:id', (req,res,next)=>{

});

module.exports = router;