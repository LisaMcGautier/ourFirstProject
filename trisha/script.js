$(document).ready(function () {

    $('.modal').modal();

    var spinner = document.getElementById("spinner");

    // function preloaderSpinner(display) {

    //     if (restaurantsByCoordinates) {

    //         //  $("#spinner").hide();
    //         spinner.style.display = 'block';

    //     } else if (restaurantsByCoordinates) {

    //         //  $("#spinner").hide();
    //         spinner.style.display = 'block';

    //     }else {

    //         //$("#spinner").show();
    //         spinner.style.display = 'none';
    //     }

    // };

    // HTML5 geolocation pop-up message

    "use strict";
    let map;
    initMap();

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
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);

                    console.log(pos);

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

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
    }

    function mapRestaurantLocation(restaurantName, restaurantLocation) {

        console.log(restaurantName, restaurantLocation);

        //============================================================================
        // Use the address here to place the Restaurant marker in Google Maps...


    }
    // IF latitude and longitude are retrieved from geolocation

    function restaurantsByCoordinates(latitude, longitude) {

        console.log(latitude, longitude);

        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=" + latitude + "&longitude=" + longitude;

        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET",
            headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
        }).then(function (response) {

            // console.log(response);

            for (var i = 0; i < 5; i++) {

                spinner.style.display = 'none';

                // Needs to be a button or clickable element

                var restaurantTile = $("<a>");
                var restaurantName = response.businesses[i].name;
                var restaurantLocation = response.businesses[i].location.address1;
                restaurantTile.attr("href", "#!");
                restaurantTile.addClass("collection-item");
                restaurantTile.html(restaurantName + "<br>" + restaurantLocation);

                restaurantTile.on("click", function () {

                    mapRestaurantLocation(restaurantName, restaurantLocation);

                });

                $("#restaurantList").append(restaurantTile);

                // var restaurantName = $("<p>");
                // restaurantName.text(response.businesses[i].name);
                // $("#restaurantList").append(restaurantName);

                // var restaurantLocation = $("<a>");
                // restaurantLocation.text(response.businesses[i].location.address1) + " " + (response.businesses[i].location.address2);

                // $("#restaurantList").append(restaurantLocation);

                // Needs to be a button or clickable element
                // materialize collection??
                // var restaurantTile = $("<a>");
                // restaurantTile.attr("href", "#!");

                // $("restaurantList").append(restaurantTile);

                // Add event listener to restaurantName



            }

        });

    };

    // Add event listener zip code submit
    $(".searchBtn").on("click", function () {
        var zipCode = $("#zip-input").val();
        console.log(zipCode);
        restaurantsByZip(zipCode);
        return false;

    });

    function restaurantsByZip(zipCode) {

        var zipCode;
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&location=" + zipCode;

        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET",
            headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
        }).then(function (response) {

            // console.log(response);

            for (var i = 0; i < 5; i++) {

                spinner.style.display = 'none';

                // Needs to be a button or clickable element

                var restaurantTile = $("<a>");
                var restaurantName = response.businesses[i].name;
                var restaurantLocation = response.businesses[i].location.address1;
                restaurantTile.attr("href", "#!");
                restaurantTile.addClass("collection-item");
                restaurantTile.html(restaurantName + "<br>" + restaurantLocation);

                restaurantTile.on("click", function () {

                    mapRestaurantLocation(restaurantName, restaurantLocation);

                });

                $("#restaurantList").append(restaurantTile);

                // var restaurantName = $("<p>");
                // restaurantName.text(response.businesses[i].name);
                // $("#restaurantList").append(restaurantName);

                // var restaurantLocation = $("<a>");
                // restaurantLocation.text(response.businesses[i].location.address1) + " " + (response.businesses[i].location.address2);

                // $("#restaurantList").append(restaurantLocation);

                // Needs to be a button or clickable element
                // materialize collection??
                // var restaurantTile = $("<a>");
                // restaurantTile.attr("href", "#!");

                // $("restaurantList").append(restaurantTile);



            }

        });

    };

});

// Add event listener to restaurantName

// $("#local-shop").on("click", function () {
//     var address = $(this).val();
//     console.log(address);
// });

// let button = document.getElementById("get-location");
// let latitude = document.getElementById("latitude");
// let longitude = document.getElementById("longitude");

// button.addEventListener("click", function() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     latitude.innerText = lat.toFixed(2);
//     longitude.innerText = long.toFixed(2);

//     restaurantsByCoordinates(latitude, longitude);

//   });

// });