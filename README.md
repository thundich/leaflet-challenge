# leaflet-challenge

Module 15 Challenge

Tamara Hundich

01/11/2024

  Michigan State University edX Data Analytics Bootcamp 

  Challenge 15: Leaflet 

## Instructions: Create the Earthquake Visualization
  - Get your dataset. To do so, follow these steps
    - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize.
    - When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.
  - Import and visualize the data by doing the following
    - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude
        - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color
    - Include popups that provide additional information about the earthquake when its associated marker is clicked
    - Create a legend that will provide context for your map data.
    - Your visualization should look something like the preceding map

## Resources/References
- When trying to research code for inserting the legend based on the example photo provided in homework assignment, majority of information found for the legend code was the same. I was not able to uniquely create the legend code. Provided URL for reference of legend code that was used:
    -  https://gis.stackexchange.com/questions/133630/adding-leaflet-legend

## Limitations
- One of the limitations of this assignment was some of the magnitudes provided were coming back with a negative magnitude. Upon researching the magnitude scale, magnitudes cannot be a negative value. In order to resolve the negative numbers, a scaler was used. This allowed to obtain a proper scale on the map.   
                
## Installation and Configuration 	
- Files included with repository include the README, Images provided with files, style CSS, logic.JS 
