var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');


router.get('/', function(req, res){
	Day.findAll()
	.then(function(days){
		res.send(days);
	})
})

.get('/:id', function(req, res){
	
})

.put('/:id', function(req, res){
	
})

.delete('/:id', function(req, res){
	
})

.post('/', function(req, res){
	// Day.create()
    console.log('got the request!')
    console.log(publicAPI)
})


//Add or delete from specific day
.delete('/:id/:type', function(req, res){
	
})

.post('/:id/:type', function(req, res){
	
})


module.exports = router;