// Add console.log to check to see if our code is working.
    //The console.log() function with the phrase "working" inside the parentheses
    //will help us confirm that our logic.js file is being accessed in the console on Chrome.
console.log("working");


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    // [33.9416, -118.4085],
    [37.6213, -122.3790], //SF
    [30.1975, -97.6664], //AUS
    [43.6777, -79.6248], //YYZ
    [40.6413, -73.7781] //JFK
    ];
  
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: "5 10"   //creates a dash line for line - "5 10" --> "5" is the length of the dash, "10" is the gap between dashes
    }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
    });

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);