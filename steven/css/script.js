var x = document.getElementById("demo");
var y = document.getElementById("demo1");
const spinner = document.getElementById("spinner");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    spinner.removeAttribute('hidden');
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  var latitude =  parseFloat(position.coords.latitude);
  var longitude =parseFloat( position.coords.longitude);
  initMap(latitude, longitude);
  var queryURL =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    latitude +
    "," +
    longitude +
    "&key=AIzaSyCZpN1LVa4mDWLaJe-QHtXPPOfXjeg6Ap0";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    y.innerHTML = response.results[0].address_components[5].short_name;
    var z = response.results[0].address_components[5].short_name;
    var queryURL2 =
      " https://developer.nps.gov/api/v1/parks?stateCode=" +
      z +
      "&api_key=wV47kSkvj2E4EXWlDq3d6TIN4Q8X39nRx1M3d3Qb";
    $.ajax({
      url: queryURL2,
      method: "GET",
    }).then(function (parks) {
      spinner.setAttribute('hidden', '');
      // console.log(parks)
      parksList = parks.data
      console.log(parks)
      spinner.setAttribute('hidden', '');
      // console.log(parks)
      parksList = parks.data
      console.log(parks)
      displayParks(parks);
    });
  });
};