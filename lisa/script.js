$(document).ready(function () {
    // $(".sidenav").sidenav();


    // Modal to open on page load?  save location preference (google geolocate or zip code)
    //  How to close the modal pop-up box??

    // HTML5 geolocation pop-up message

    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            // Modal : please enter your zip code
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    };

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    };



    // Add event listener zip code submit
        $(".searchBtn").on("click", function () {
            var thisZip = $("#zip-input").val();
            console.log(thisZip);
        
        });

    // OR change to dropdown with subzones

    // Google maps location GLOBAL variables latitude and longitude of current position 
    // OR latitude and longitude of zip code
    // save lat and lon in GLOBALvariables

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

        console.log(response.restaurants[0].restaurant.name);
        console.log(response.restaurants[0].restaurant.R.res_id);

        console.log(response.restaurants[1].restaurant.name);
        console.log(response.restaurants[1].restaurant.R.res_id);

        console.log(response.restaurants[2].restaurant.name);
        console.log(response.restaurants[2].restaurant.R.res_id);

        console.log(response.restaurants[3].restaurant.name);
        console.log(response.restaurants[3].restaurant.R.res_id);

        console.log(response.restaurants[4].restaurant.name);
        console.log(response.restaurants[4].restaurant.R.res_id);

        // $("#local-shop").empty();

        for (var i = 0; i < 5; i++) {

            // var restaurantID = response.restaurants[i].R.res_id;
        
            // Needs to be a button or clickable element
            var restaurantName = $("<p>");
            restaurantName.text(response.restaurants[i].restaurant.name);
            $("#local-shop").append(restaurantName);

            // Add event listener to restaurantName
            // materialize collapsible ??

            // In order to create API search for menu
        }

    });    


    $(".modal").modal();
    // Add event listener modal DECLINE or ACCEPT

})