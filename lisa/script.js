$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".modal").modal();



//  API call requires header key and value

    $.ajax({
        dataType: 'json',
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city&cuisines=Latin%20American",
        method: "GET",
        headers: { "user-key": "6e5be356cc4a96733158bee5d1d847e7" }
    }).then(function (response) {

        console.log(response);

    });
    

})