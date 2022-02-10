# Mapping_Earthquakes
## Project Overview
The purpose of this project is to gather GeoJSOn data from USGS API and create a interactive map that looks at earthquake data gathered from the API. The earthquake data is also presented with the locations of the tectonic plates.

## The Visualization
The coding for the following visualizations can be found in the "static" folder ("style.css", "challenge_logic.js")

Here is the visualization:
![image](https://user-images.githubusercontent.com/72320203/153337526-17b13bf3-f439-42d8-bfec-f658d9bafda8.png)

The tectonic plates are marked with the red lines going across the maps and the the earthquakes we gathered data on from the USGS are marked by the circular markers of various colors and sizes. The colors and the sizes denote the magnitude of the the earthquakes. The larger and more red a marker is, the higher the magnitude of that earthquake. The color scale for earthquake magnitudes can be seen in the legend at the bottom right corner.

At the top right corner, there is the layers icon that can select 3 different map modes (Streets, Satellite, Dark) as well as a filter to choose what information (Earthquakes, Tectonic Plates, Major Earthquakes) to display on the map. The "Streets" map is displayed above with all the information. 

This is the "Satellite" map filtered just for tectonic plate data: 
![image](https://user-images.githubusercontent.com/72320203/153338051-9db88d40-ded9-45ff-a3aa-34a385dac222.png)

This is the "Dark" map filtered just for major earthquake data:
![image](https://user-images.githubusercontent.com/72320203/153338206-22d0eba0-cecf-4389-824e-c9bd675e5b54.png)





