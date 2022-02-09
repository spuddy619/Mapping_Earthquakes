//Add console.log to see if code is functioning 
console.log("The code is working player");

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map - specifically "light-v10" layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets" : streets,
    "Satellite Streets" : satelliteStreets
};

let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
}) 

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/spuddy619/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines- lines from "torontoData" json
let myStyle = {
    color: "blue",
    fillColor: "yellow",
    weight: 1,
}

// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    L.geoJSON(data).addTo(map);
});

/////////////////
/////////////////
/////////////////

// //Add console.log to see if code is functioning 
// console.log("The code is working player");

// // We create the dark view tile layer that will be an option for our map.
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the tile layer that will be the background of our map - specifically "light-v10" layer
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
//     }
// );


// // Create a base layer that holds both maps.
// let baseMaps = {
//     "Streets" : streets,
//     "Satellite Streets" : satelliteStreets
// };

// let map = L.map('mapid', {
//     center: [43.7, -79.3],
//     zoom: 11,
//     layers: [streets]
// }) 

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// // Accessing the Toronto neighborhoods GeoJSON URL
// let torontoHoods = "https://raw.githubusercontent.com/spuddy619/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Create a style for the lines- lines from "torontoData" json
// let myStyle = {
//     color: "blue",
//     fillColor: "yellow",
//     weight: 1,
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//     //also establishes color, fillColor, weight - with "myStyle" variable above
//     L.geoJSON(data, {
//         style: myStyle,
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup("<h2> Neighborhood: " + feature.properties.AREA_NAME);
//         }      
//     }).addTo(map);
// });


