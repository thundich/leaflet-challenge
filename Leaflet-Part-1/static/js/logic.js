// Loading the GeoJSON
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


var map = L.map('map').setView([41.16, -104.80], 5)

// Adding a tile layer to our map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

function get_circle_color(depth) {
    if (depth > 90) {
        return "red";
    } else if (depth > 70 && depth <= 90) {
        return "darkorange";
    } else if (depth > 50 && depth <= 70) {
        return "orange"; 
    } else if (depth > 30 && depth <= 50) {
        return "gold"; 
    } else if (depth > 10 && depth <= 30) {
        return "yellow"
    } else {
        return "lightgreen"
    }
}

function init() {
    d3.json(url).then((data) => {
        let features = data.features
        let min_magnitude = 0
        for (var i=0; i<features.length; i++){
            let circle = L.circle([features[i].geometry.coordinates[1], features[i].geometry.coordinates[0]], {
                color: get_circle_color(features[i].geometry.coordinates[2]),
                fillColor: get_circle_color(features[i].geometry.coordinates[2]),
                fillOpacity: 0.5,
                radius: ((features[i].properties.mag +5) * (features[i].properties.mag + 5)) * 750
            })
            circle.bindPopup("Place: " + features[i].properties.place +
                             "<br>Magnitude: " + features[i].properties.mag + 
                             "<br>Depth: " + features[i].geometry.coordinates[2])
            circle.addTo(map)
        
        }
    }
  )
}

depthColors = ["lightgreen", "yellow", "gold", "orange", "darkorange", "red"]; 
var legend = L.control({position: 'bottomright'});
legend.onAdd = function(map){
    var div = L.DomUtil.create('div', 'info legend');
    labels = ["<div style='background-color: white'><strong>Depth (km)</strong></div>"]
    categories = ['-10-10', ' 10-30', ' 30-50', ' 50-70', ' 70-90', '90+'];
    for (var i = 0; i < categories.length; i++) { 
        div.innerHTML +=
            labels.push(
            '<li class="circle" style="background-color:' + depthColors[i] + '">' + categories[i] + '</li> '
            )
    }
    // Set the inner HTML of the legend element.
    div.innerHTML = '<ul style="list-style-type:circle; text-align: center; font-size: 12px;">' + labels.join('') + '</ul>'

    return div;
};
legend.addTo(map);

init()
