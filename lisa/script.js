$(document).ready(function () {

    // getLocation();

    // // HTML5 geolocation pop-up message



    // Add event listener zip code submit
    $(".searchBtn").on("click", function () {
        var thisZip = $("#zip-input").val();
        console.log(thisZip);

    });


    // IF latitude and longitude are retrieved from geolocation 
    function getRestaurants(latitude, longitude) {

        // var latitude;
        // var longitude;

        $.ajax({
            dataType: "json",
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=" + latitude + "&longitude=" + longitude,
            method: "GET",
            headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
        }).then(function (response) {

            console.log(response);

            for (var i = 0; i < 5; i++) {

                // Needs to be a button or clickable element
                var restaurantName = $("<p>");
                // restaurantName.addClass("waves-effect waves-orange btn-flat")
                restaurantName.text(response.businesses[i].name);
                $("#local-shop").append(restaurantName);

                // Add event listener to restaurantName
                // materialize collapsible or collection??

            }
        });


    };  getRestaurants();

    // IF user enters zip code
    function getRestaurants(zipCode) {

        // var zipCode;
        $.ajax({
            dataType: "json",
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&location=" + zipCode,
            method: "GET",
            headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
        }).then(function (response) {

            console.log(response);

            for (var i = 0; i < 5; i++) {

                // Needs to be a button or clickable element
                var restaurantName = $("<p>");
                // restaurantName.addClass("waves-effect waves-orange btn-flat")
                restaurantName.text(response.businesses[i].name);
                $("#local-shop").append(restaurantName);

                // Add event listener to restaurantName
                // materialize collapsible or collection??

            }
        });


    };  


});

"use strict";

let map;

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