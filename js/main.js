console.log('loaded')

// delay code until all DOM loaded
$(function(){

	// create submit listener for #city-type
	$('#submit-btn').on('click', function(e) {
		e.preventDefault();

			// get value of #city-type
		var city = $('#city-type').val();
		console.log(city)

		// if city === 'New York' || city === 'New York City' || city === 'NYC'
			// return background image .nyc
		if (city === 'New York' || city === 'New York City' || city === 'NYC') {
			$('body').addClass('nyc');
		}

		// else if city === 'San Francisco' || city === 'SF' || city === 'Bay Area'
			// return background image .sf
		else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
			$('body').addClass('sf');
		}

		// else if city === 'Los Angeles' || city === 'LA' || city === 'LAX'
			// return background image .la
		else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').addClass('la');
		}

		// else if city === 'Austin' || city === 'ATX'
			// return background image .austin
		else if (city === 'Austin' || city === 'ATX') {
			$('body').addClass('austin');
		}

		// else if city === 'Sydney' || city === 'SYD'
			// return background image .sydney
		else if (city === 'Sydney' || city === 'SYD') {
			$('body').addClass('sydney');
		}

		// else do nothing

		// reset value of #city-type to empty string
		$('#city-type').val('');
	});
});


//**I initially tried doing it this way... is this roughly on the right track?**//

		// function setBackgroundImage(cityName) {
		// 	if (city === 'New York' || city === 'New York City' || city === 'NYC') {
		// 		$('body').css('background-image', 'url("../images/nyc.jpg")');
		// 	}
		// }

