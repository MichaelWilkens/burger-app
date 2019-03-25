var express = require("express");
var router = express.Router();

//require model
var burger = require("../models/burger.js");

router.get('/', function(req, res){
    burger.all('burgers', function(data){
        console.log(data);
        res.render('index', {burgers: data});
    });
});

router.post('/api/newBurger', function(req, res){
    burger.create(Object.keys(req.body)[0], function(data){
        res.json(data);
    })
})

router.put('/api/newBurger/:id', function(req, res){
    burger.update(req.params.id, function(data){
        res.json(data);
    })
})

module.exports = router