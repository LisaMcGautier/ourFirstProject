# Project 1

## Application Requirements

* Must use at least two server-side APIs

* Must use a CSS framework _other than_ Bootstrap

* Must be interactive (i.e: accept and respond to user input)

* Use at least one new third-party API

* Must have a polished UI

* Must meet good quality coding standards

* Does not use alerts, confirms or prompts (look into _modals_)

* Must be deployed to GitHub Pages


## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository


## Grading Metrics 

| Metric        | Weight | 
| ---           | ---    |
| Concept       | 10%    |
| Design        | 20%    |
| Functionality | 30%    |
| Collaboration | 30%    |
| Presentation  | 10%    |


## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository

8/5

Created Repo on github.

Music Roulette app?  Group chose a common area of interest, decided to build an app that would allow a user to search music by genre and return a random playlist.  Maybe also return the album artwork or the lyrics to the song.  Struggled to find free music APIs that allow a search by genre.

8/6

Based on feedback, decided to abandon the music app for a more niche concept. Brainstormed new ideas, possibly searching for "things to do with kids" based on user's location.

8/7

Brainstormed again, including a concept to search for haunted/macabre history based on user's location.  Had difficulty finding an API to serve the search.

Decided to examine suggested APIs [https://github.com/public-apis/public-apis] and develop an idea based on available information, rather than trying to search for APIs that will meet app concepts.

Chose Zomato API and decided to search for locations serving Cuban coffee in the Miami metro area.  Second API pending, possibly Google Maps.

8/8  

Created individual branches on github for collaboration.

git branch yourname - create a new branch named 'yourname'
git branch - list all remote branches available
git checkout yourname  - switch to branch 'yourname'
when a GitHub pull request is approved into master branch, all teammates must pull new master into their branches (edited) 
branch changes must be committed to save progress before switching

Built the basic HTML for the app, utilizing Materialize for styling.

Started the pseudocode for the functionality.

8/9

Created basic logic for Zomato and Google Maps API calls.

Both seem to require header key & value within AJAX method.

8/10

Explored various Zomato API calls.  Used the "search" API call to log restaurant details to the console.  Also wrote code to display results dynamically on the page from hard-coded location.

Worked on getting map to display in the web page.

8/11

Determined that Zomato API will not filter results based on cuisine type.  Switched to Yelp API, which creates a CORS error.  Routed API call through heroku app [https://stackoverflow.com/questions/53357891/how-do-i-resolve-the-cors-error-in-yelp-api-call]

Streamlined HTML.

Discovered HTML5 geolocation API (built into the browser).

Google maps is displaying in the page.

8/12

Working on the logic to determine whether user allowed geolocation or will need to enter the zip code.

Created function to retrieve zip code as a variable and the pass the Yelp API call to search (by zip code).

Added a modal to allow the user to accept or decline location services.

Retrieved restaurant addresses to display with restaurant names.

Attempted to create clickable links for restaurants...

8/13

Created a button to retrieve latitude and longitude coordinates from browser geolocation in order to pass to Yelp API call.

Changed function name `getRestaurants(zipCode)` to `restaurantsByZip(zipCode)` 
AND `getRestaurants(latitude, longitude)` to `restaurantsByCoordinates(latitude, longitude)`
because having two functions with the same name but different parameters was confusing.

Tried to call function `getRestaurants(latitude, longitude)` upon the retrieval of coordinates, but the function declaration is written in JQuery and the funcion call is in JavaScript; scope issue 

8/15

Found a way to move the function call for Google maps into the JQuery document.ready function.  Needed to change the API URL in index.html.

Added the spinner to the page and positioned it within the local restaurants diaplay area.

Added collection-item class inside the for loops to display restaurants as clickable elements.

Re-arranged the `script.js` file to render in the same order as elements are displayed in the `index.html` file.

Modified the html to center the styled elements.

8/16

Completed the code for the `mapRestaurantLocation` function to display the marker on the map, 
including increasing the zoom level of the map.

Needed to replace invalid characters from restaurantName, because hyphens and apostrophes break the JavaScript:
`https://stackoverflow.com/questions/8979619/jquery-remove-special-characters-from-string-and-more`.

Created new function `displayLocalRestaurants`, to DRY up the repetitive code within 
`restaurantsByCoordinates(latitude, longitude)` and `restaurantsByZip(zipCode)`.

8/20

Added comments to `script.js`.












