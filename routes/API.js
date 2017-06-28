var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/hotels', function(req, res){
	Hotel.findAll()
	.then(function(hotels){
		res.send(hotels);
	})
})

router.get('/restaurants', function(req, res){
	Restaurant.findAll()
	.then(function(restaurants){
		res.send(restaurants);
	})
})

router.get('/activities', function(req, res){
	Activity.findAll()
	.then(function(activities){
		res.send(activities);
	})
})

module.exports = router;