$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".modal").modal();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://thefork.p.rapidapi.com/locations/list?google_place_id=ChIJEcHIDqKw2YgRZU-t3XHylv8",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "thefork.p.rapidapi.com",
            "x-rapidapi-key": "a574a25ea2msh5e7d0b227f558d8p11749fjsn112a0fba655d"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);


    });

    $.ajax({
        dataType: "json",

        //  API call for Miami (entity_id=291)
        //  entity_type=city
        //  cuisines=Latin%20American
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city&cuisines=Latin%20American",
        method: "GET",

        //  API call requires header key and value
        headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    }).then(function (response) {

        console.log(response);

    });


})