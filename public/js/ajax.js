$(function(){

	var $hotelChoices = $('#hotel-choices')
	var $restaurantChoices = $('#restaurant-choices')
	var $activityChoices = $('#activity-choices')

	$.get('/api/hotels')
	.then(function (hotels) {
	  	hotels.forEach(function(hotel){
		    $hotelOption = $(`<option value =${hotel.id}>${hotel.name}</option>`)
	    	$hotelChoices.append($hotelOption)
	  });
	})
	.catch(console.error.bind(console));

	$.get('/api/restaurants')
	.then(function (restaurants) {
	  restaurants.forEach(function(restaurant){
	    $restaurantOption = $(`<option value =${restaurant.id}>${restaurant.name}</option>`)
    	$restaurantChoices.append($restaurantOption)
	  });
	})
	.catch(console.error.bind(console));

	$.get('/api/activities')
	.then(function (activities) {
	  activities.forEach(function(activity){
		    $activityOption = $(`<option value =${activity.id}>${activity.name}</option>`)
	    	$activityChoices.append($activityOption)
	  });
	})
	.catch(console.error.bind(console));

})


