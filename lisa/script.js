$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".modal").modal();

    // Modal to open on page load?  save location preference (google geolocate or zip code)
    //  How to close the modal pop-up box??

    // Add event listener zip code submit
    // OR change to dropdown with subzones

    // Google maps location GLOBAL variables latitude and longitude of current position 
    // OR latitude and longitude of zip code

    var map, infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10
      });
      infoWindow = new google.maps.InfoWindow;
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          console.log(pos);

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }

    // save lat and lon in GLOBAL variables

    // Zomato search 
    //  SEARCH: REQUIRES ENTITY ID & ENTITY TYPE; 14,000+ RESULTS
    //  EXAMPLE SHOWN = lat + lon + radius(meters) + cuisines + sort (distance)
    $.ajax({
        dataType: "json",
        url: "https://developers.zomato.com/api/v2.1/search?lat=25.912989999999997&lon=-80.3209667&radius=5000&cuisines=Latin%20American&sort=real_distance",
        method: "GET",
        headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    }).then(function (response) {

        console.log(response);
        // console.log(response.restaurants[0]);
        // console.log(response.restaurants[0].restaurant);
        console.log(response.restaurants[0].restaurant.name);
        console.log(response.restaurants[0].restaurant.R.res_id);

        // console.log(response.restaurants[1]);
        // console.log(response.restaurants[1].restaurant);
        console.log(response.restaurants[1].restaurant.name);
        console.log(response.restaurants[1].restaurant.R.res_id);

        // console.log(response.restaurants[2]);
        // console.log(response.restaurants[2].restaurant);
        console.log(response.restaurants[2].restaurant.name);
        console.log(response.restaurants[2].restaurant.R.res_id);

        // console.log(response.restaurants[3]);
        // console.log(response.restaurants[3].restaurant);
        console.log(response.restaurants[3].restaurant.name);
        console.log(response.restaurants[3].restaurant.R.res_id);

        // console.log(response.restaurants[4]);
        // console.log(response.restaurants[4].restaurant);
        console.log(response.restaurants[4].restaurant.name);
        console.log(response.restaurants[4].restaurant.R.res_id);

        // $("#local-shop").empty();

        for (var i = 0; i < 5; i++) {

            var restaurantID = response.restaurants[i].R.res_id;
        
            // Needs to be a button or clickable element
            var restaurantName = $("<p>");
            restaurantName.text(response.restaurants[i].restaurant.name);
            $("#local-shop").append(restaurantName);

            // Add event listener to restaurantName
            // materialize collapsible ??

            // In order to create API search for menu
        }

    });





    




})