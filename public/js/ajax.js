$(function(){

	var $hotelChoices = $('#hotel-choices')
	var $restaurantChoices = $('#restaurant-choices')
	var $activityChoices = $('#activity-choices')

	let getHotels = $.get('/api/hotels')
	let getRestaurants = $.get('/api/restaurants')
	let getActivities = $.get('/api/activities')

	Promise.all([getHotels, getRestaurants, getActivities])
	.then(function(results) {
		hotels = results[0];
		restaurants = results[1];
		activities = results[2];

	    // jQuery selects
  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

  // make all the option tags (second arg of `forEach` is a `this` binding)
  hotels.forEach(makeOption, $hotelSelect);
  restaurants.forEach(makeOption, $restaurantSelect);
  activities.forEach(makeOption, $activitySelect);

  function makeOption (databaseAttraction) {
    var $option = $('<option></option>') // makes a new option tag
      .text(databaseAttraction.name)
      .val(databaseAttraction.id);
    this.append($option); // add the option to the specific select
  }

  // what to do when the `+` button next to a `select` is clicked
  $optionsPanel.on('click', 'button[data-action="add"]', function () {
    var $select = $(this).siblings('select');
    var type = $select.data('type'); // from HTML data-type attribute
    var id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    var attraction = attractionsModule.getByTypeAndId(type, id);
    tripModule.addToCurrent(attraction);
  });
		
		mapModule = makeMapModule();
		attractionModule = makeAttractionModule();
		attractionsModule = makeAttractionsModule();
		dayModule = makeDayModule();
		tripModule = makeTripModule();

		tripModule.load();
	})
	.catch(console.error.bind(console));
})


	// $.get('/api/days')
	// .then(function (data) { console.log('GET response data: ', data) })
	// .catch(console.error.bind(console));
	