$(document).ready(function () {
    
    // ZOMATO API CALLS
    // =================================================================

    // CATEGORIES:   14 RESULTS
    // Get a list of categories
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/categories",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // CITIES:  SEARCH RESULTS FOR MIAMI, FL location_suggestions[0]
    // REQUIRES CITY NAME OR COORDINATES
    // Find the Zomato ID and other details for a city
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/cities?q=miami%2C%20fl",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);
        // "location_suggestions": [
        //     {
        //         "id": 291,
        //         "name": "Miami, FL",
        //         "country_id": 216,
        //         "country_name": "United States",
        //         "country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_216.png",
        //         "should_experiment_with": 0,
        //         "has_go_out_tab": 0,
        //         "discovery_enabled": 1,
        //         "has_new_ad_format": 0,
        //         "is_state": 0,
        //         "state_id": 77,
        //         "state_name": "Florida",
        //         "state_code": "FL"
        //     },

    // });

    // COLLECTIONS: REQUIRES CITY ID OR COORDINATES; 17 RESULTS
    // Returns Zomato Restaurant Collections in a City
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/collections?city_id=291",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });


    // CUISINES: REQUIRES CITY ID OR COORDINATES; 115 RESULTS
    // Get a list of all cuisines of restaurants listed in a city
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/cuisines?city_id=291",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // ESTABLISHMENTS: REQUIRES CITY ID OR COORDINATES; 34 RESULTS
    // Get a list of restaurant types in a city
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/establishments?city_id=291",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // GEOCODE  REQUIRES LATITUDE AND LONGITUDE
    // Get Foodie and Nightlife Index, list of popular cuisines and nearby restaurants around the given coordinates
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/establishments?city_id=291",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // LOCATION DETAILS: REQUIRES LOCATION ID AND LOCATION TYPE
    // Get Foodie Index, Nightlife Index, Top Cuisines and Best rated restaurants in a given location
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/location_details?entity_id=291&entity_type=city",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // LOCATIONS: LOCATION NAME RECOMMENDED
    // RETURNS LATITUDE AND LONGITUDE FOR LOCATION NAME (OR SUGGESTIONS)
    // Search for Zomato locations by keyword. Provide coordinates to get better search results
    // $.ajax({
    //     dataType: "json",
    //     url: "https://developers.zomato.com/api/v2.1/locations?query=miami%2C%20fl",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);
        // {
        //     "location_suggestions": [
        //         {
        //             "entity_type": "city",
        //             "entity_id": 291,
        //             "title": "Miami, Florida",
        //             "latitude": 25.774111,
        //             "longitude": -80.193565,
        //             "city_id": 291,
        //             "city_name": "Miami",
        //             "country_id": 216,
        //             "country_name": "United States"
        //         }
        //     ],
        //     "status": "success",
        //     "has_more": 0,
        //     "has_total": 0,
        //     "user_has_addresses": true
        // }

    // });
    
    // DAILY MENU: REQUIRES RESTAURANT ID
    // Get daily menu using Zomato restaurant ID.
    // $.ajax({
    //     dataType: "json",
    //     url: "",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // RESTAURANT: REQUIRES RESTAURANT ID
    // Get detailed restaurant information using Zomato restaurant ID

    // $.ajax({
    //     dataType: "json",
    //     url: "",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });

    // REVIEWS: REQUIRES RESTAURANT ID
    // Get restaurant reviews using the Zomato restaurant ID. Only 5 latest reviews are available under the Basic API plan.
    // $.ajax({
    //     dataType: "json",
    //     url: "",
    //     method: "GET",
    //     headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    // }).then(function (response) {

    //     console.log(response);

    // });


    //  SEARCH: REQUIRES ENTITY ID & ENTITY TYPE; 14,000+ RESULTS
    //  EXAMPLE SHOWN = CITY ID 291 (MIAMI, FL) + ENTITY TYPE (CITY) + CUISINE (LATIN AMERICAN)
    $.ajax({
        dataType: "json",
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city&cuisines=Latin%20American",
        method: "GET",
        headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    }).then(function (response) {

        console.log(response);

    });

})