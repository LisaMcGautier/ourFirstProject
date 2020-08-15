$(document).ready(function () {

    $('.modal').modal();

    "use strict";
    let map;
    initMap();

    // HTML5 geolocation pop-up message

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

            console.log(response);

            for (var i = 0; i < 5; i++) {

                // Needs to be a button or clickable element
                var restaurantName = $("<p>");
                restaurantName.text(response.businesses[i].name);
                $("#local-shop").append(restaurantName);

                var restaurantLocation = $("<a>");
                restaurantLocation.text(response.businesses[i].location.address1) + " " + (response.businesses[i].location.address2);
                restaurantLocation.attr("href", "#!");
                $("#local-shop").append(restaurantLocation);

                // Needs to be a button or clickable element
                // materialize collection??
                // var restaurantTile = $("<a>");
                // restaurantTile.attr("href", "#!");
                // restaurantTile.addClass("collection-item")

                // $("restaurantList").append(restaurantTile);

            }

        });

    };


    // Add event listener to restaurantName

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

            console.log(response);

            for (var i = 0; i < 5; i++) {

                var restaurantName = $("<p>");
                restaurantName.text(response.businesses[i].name);
                $("#local-shop").append(restaurantName);

                var restaurantLocation = $("<a>");
                restaurantLocation.text(response.businesses[i].location.address1) + " " + (response.businesses[i].location.address2);
                restaurantLocation.attr("href", "#!");
                $("#local-shop").append(restaurantLocation);

                // Needs to be a button or clickable element
                // materialize collection??
                // var restaurantTile = $("<a>");
                // restaurantTile.attr("href", "#!");
                // restaurantTile.addClass("collection-item")

                // $("restaurantList").append(restaurantTile);

            }

        });

    };

    // let map;

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

});

// Add event listener to restaurantName


"use strict";

// // Instantiate your javascript function
// niceJavascriptRoutine = null;

// // Begin jQuery
// $(document).ready(function () {

//     // Your jQuery function
//     function niceJqueryRoutine() {
//         // some code
//     }
//     // Point the javascript function to the jQuery function
//     niceJavaScriptRoutine = niceJqueryRoutine;

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


// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: {
//             lat: 25.7648820000,
//             lng: -80.2526540000,
//         },
//         zoom: 14
//     });
//     infoWindow = new google.maps.InfoWindow(); // Try HTML5 geolocation.

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 const pos = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 };
//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent("Location found.");
//                 infoWindow.open(map);
//                 map.setCenter(pos);

//                 console.log(pos);

//                 // restaurantsByCoordinates(latitude, longitude)

//             },
//             () => {
//                 handleLocationError(true, infoWindow, map.getCenter());
//             }
//         );
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }