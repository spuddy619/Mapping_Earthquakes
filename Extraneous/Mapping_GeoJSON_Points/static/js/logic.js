// Create the map object with center at zoom level
// let map = L.map('mapid', {
//     center: [30, 30],
//     zoom: 2,
//     layers: [streets]   
// }).setView([30, 30], 2);

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
    }
);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};

let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
}) 

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/spuddy619/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data,{    // this chunk binds popups to a marker located at "latlng" (the location)
        pointToLayer: function(feature, latlng) {
            console.log(feature);
            return L.marker(latlng)
            .bindPopup("<h2>Airport Code: " + feature.properties.faa + "<hr>Airport name: " + feature.properties.name + "</h2>")
        }
    }).addTo(map);
});


// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         pointToLayer: function(feature, latlng) {
//             console.log(feature);
//             return L.marker(latlng)
//             .bindPopup("<h2>Airport Code: " + feature.properties.faa + "<hr>Airport name: " + feature.properties.name + "</h2>")
//         }
//     }).addTo(map);
// });





//////////////// 13.5.3
////////////////
////////////////
////////////////

// // Create the map object with center at zoom level
// let map = L.map('mapid').setView([30, 30], 2);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
//     });
// // Then we add our 'streets' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/spuddy619/Mapping_Earthquakes/main/majorAirports.json";


// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         pointToLayer: function(feature, latlng) {
//             console.log(feature);
//             return L.marker(latlng)
//             .bindPopup("<h2>Airport Code: " + feature.properties.faa + "<hr>Airport name: " + feature.properties.name + "</h2>")
//         }
//     }).addTo(map);
// });

