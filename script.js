$(document).ready(function () {

    // Originally created the modal for our own geolocation modal.
    // However, without this line, the html pop-up box for location permission does not appear.
    $('.modal').modal();

    // Creates a variable for the preloader icon from Materialize.
    var spinner = document.getElementById("spinner");

    // HTML5 geolocation pop-up message
    "use strict";
    let map;
    initMap();

    // Declares function `initMap` to check if location services have been allowed by the user,
    // creates the map image on the page, and calls the function `restaurantsByCoordinates`.
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 25.7648820000,
                lng: -80.2526540000,
            },
            zoom: 14
        });
        infoWindow = new google.maps.InfoWindow(); // Try HTML5 geolocation.

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    // infoWindow.setPosition(pos);
                    // infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);

                    restaurantsByCoordinates(pos.lat, pos.lng);

                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    // function handleLocationError in case geolocation services are declined by the user.
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
    }

    // IF latitude and longitude are retrieved from geolocation, function `restaurantsByCoordinates`
    // makes the API call and calls the function `displayLocalRestaurants`.
    function restaurantsByCoordinates(latitude, longitude) {

        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=" + latitude + "&longitude=" + longitude;

        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET",
            headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
        }).then(function (response) {

            displayLocalRestaurants(response);

        });

    };

    // Adds event listener to zip code submit button and calls `restaurantsByZip` function.
    $(".searchBtn").on("click", function () {
        var zipCode = $("#zip-input").val();
        console.log(zipCode);
        restaurantsByZip(zipCode);
        return false;

    });

    // If geolocation is declined by user, this function will make the API call based on the zip code 
    // that is entered by the user and call the function `displayLocalRestaurants`.
    function restaurantsByZip(zipCode) {

        var zipCode;
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&location=" + zipCode;

        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET",
            headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
        }).then(function (response) {

            displayLocalRestaurants(response);

        });

    };

    // This function will dynamically display the results of the API call.
    function displayLocalRestaurants(response) {
        $("#restaurantList").empty();

        for (var i = 0; i < 5; i++) {

            spinner.style.display = 'none';

            var restaurantTile = $("<a>");
            // Replace invalid characters, such as hyphens and apostrophes, with a space.
            var restaurantName = response.businesses[i].name.replace(/[_\W]+/g, " ");
            var restaurantLocation = response.businesses[i].location.address1;
            const pos = {
                lat: response.businesses[i].coordinates.latitude,
                lng: response.businesses[i].coordinates.longitude
            };
            restaurantTile.attr("href", "#!");
            restaurantTile.addClass("collection-item");
            restaurantTile.html("<b>" + restaurantName + "</b><br>" + restaurantLocation);
            // Assigns attributes to the tile so that the function `mapRestaurantLocation` can retrieve 
            // the name and coordinates of the restaurant when the tile is clicked.
            restaurantTile.attr("onclick", "mapRestaurantLocation('" + restaurantName + "', '" + pos.lat + "', '" + pos.lng + "')");

            $("#restaurantList").append(restaurantTile);

        }

    };

});

// This function will display the map of the restaurant area and place a marker at the location of the restaurant.
function mapRestaurantLocation(restaurantName, restaurantLatitude, restaurantLongitude) {

    console.log(restaurantName);
    console.log(restaurantLatitude, restaurantLongitude);

    var myLatlng = new google.maps.LatLng(restaurantLatitude, restaurantLongitude);
    var mapOptions = {
        zoom: 16,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: restaurantName
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

}