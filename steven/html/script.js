$(document).ready(function () {

  $('.modal').modal();

  var spinner = document.getElementById("spinner");

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

                  // console.log(pos);

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
  
  // IF latitude and longitude are retrieved from geolocation

  function restaurantsByCoordinates(latitude, longitude) {

      // console.log(latitude, longitude);

      var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=" + latitude + "&longitude=" + longitude;

      $.ajax({
          dataType: "json",
          url: queryURL,
          method: "GET",
          headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
      }).then(function (response) {

          // console.log(response);
          // console.log(response.businesses[0].coordinates.latitude);
          // console.log(response.businesses[0].coordinates.longitude);
          
          $("#restaurantList").empty();

          for (var i = 0; i < 5; i++) {

              spinner.style.display = 'none';

              var restaurantTile = $("<a>");
              var restaurantName = response.businesses[i].name;
              var restaurantLocation = response.businesses[i].location.address1;
              const pos = {
                  lat: response.businesses[i].coordinates.latitude,
                  lng: response.businesses[i].coordinates.longitude
              };
              restaurantTile.attr("href", "#!");
              restaurantTile.addClass("collection-item");
              restaurantTile.html(restaurantName + "<br>" + restaurantLocation);
              restaurantTile.attr("onclick", "mapRestaurantLocation('" + restaurantName + "', '" + pos.lat + "', '" + pos.lng + "')");

              $("#restaurantList").append(restaurantTile);

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
          // console.log(response.businesses[0].coordinates.latitude);
          // console.log(response.businesses[0].coordinates.longitude);

          $("#restaurantList").empty();

          for (var i = 0; i < 5; i++) {

              spinner.style.display = 'none';

              var restaurantTile = $("<a>");
              var restaurantName = response.businesses[i].name;
              var restaurantLocation = response.businesses[i].location.address1;
              const pos = {
                  lat: response.businesses[i].coordinates.latitude,
                  lng: response.businesses[i].coordinates.longitude
              };
              restaurantTile.attr("href", "#!");
              restaurantTile.addClass("collection-item");
              restaurantTile.html(restaurantName + "<br>" + restaurantLocation);
              restaurantTile.attr("onclick", "mapRestaurantLocation('" + restaurantName + "', '" + pos.lat + "', '" + pos.lng + "')");

              $("#restaurantList").append(restaurantTile);

          }

      });

  };
 
});

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