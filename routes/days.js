var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');


router.get('/', function(req, res){
    console.log('got all the days')
    console.log(dayModule.day)
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

.post('/', function(req, res, next){
	// Day.create()
    // console.log('got the request!')
    // console.log(publicAPI)
	Day.create({})
    .then(function(day){
        res.json(day);
    })
    // .catch(next)
})


//Add or delete elements from specific day
.delete('/:id/:type', function(req, res){
	
})

.post('/:id/:type/:typeId', function(req, res, next){
    let attractionId = req.params.typeId;
    let day = req.params.id;
    let type = req.params.type;
    Day.findById(day).then( function (dayInst) {
        if( type === 'hotel'){
        dayInst.setHotel(attractionId)
    } else if (type === 'restaurant'){
        dayInst.addRestaurant(attractionId)
    } else if (type === 'activity'){
        dayInst.addActivity(attractionId)
    }
    }).then( function () {
        res.send(302)
    })

})


module.exports = router;