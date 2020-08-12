//alert user if they want to share location
// user confirms or denies share location 
//if user confirms geolocation of user then googlemaps api pulls location by lad and lon
//else user enters zip code id=zip-input
//function to listen for submit zip code
//zomato api prints top 3 closet coffee shops
//api targets cuban resturants only
// user chooses any coffee shop
//once user clicks on a coffee shop, second tile pops up with coffee shop menu
//only want to show coffee options 
//while user picks a coffee shop the third tile prints directions to shop from user location
//Zomato apikey: badcd3120036b8f961d971380ed5d2d4
//Google Api: AIzaSyB5Mt7YthEFFBSrDe39IwhIkCsaiGB-1GA

$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".modal").modal();

  //  How to close the modal pop-up box??
  // $(".modal").modal("instance.close()");
});

"use strict";

let map;

function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
center: {
  lat:25.7648820000,
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

