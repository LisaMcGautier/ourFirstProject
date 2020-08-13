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

  // getLocation();

  // HTML5 geolocation pop-up message

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


  }; getRestaurants();

  // Add event listener zip code submit
  $(".searchBtn").on("click", function () {
      var zipCode = $("#zip-input").val();
      console.log(zipCode);
      getRestaurants(zipCode);
      return false;

  });
//zip loop 
  function getRestaurants(zipCode) {

      var zipCode;
      var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=coffee&location=" + zipCode;

      $.ajax({
          dataType: "json",
          url: queryURL,
          method: "GET",
          headers: { "Authorization": "Bearer ohPvgVMciIBoJwVFMfrUyi-JDlIf_nnz9q4lNH5-IZiuF7MKZK5tmL3FMK40Nq7-DedmraddPUwsXEmAV26p6oRFQTr97kv4d_oN1pbIe54JjCaoCGFu-HvIuD0zX3Yx" }
      }).then(function (response) {

          console.log(response.businesses[0].location.address1);

          for (var i = 0; i < 5; i++) {

            
              // Needs to be a button or clickable element
              var restaurantName = $("<div>");
              // restaurantName.addClass("waves-effect waves-orange btn-flat")
              restaurantName.text(response.businesses[i].name);
              $("#local-shop").append(restaurantName);
              var resturantLocation=$("<div>").text(response.businesses[i].location.address1);
              restaurantName.append(resturantLocation).css( "margin-top", "15px");           
              // Add event listener to restaurantName
              // materialize collapsible or collection??
              // Add event listener to restaurantName
              // materialize collapsible or collection??

          }
      });


  };


});

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
      
            // Create a marker and center map on user location
            marker = new google.maps.Marker({
              position: pos,
              draggable: true,
              animation: google.maps.Animation.DROP,
              map: map
          });

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

 