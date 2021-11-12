//const pointpoly = require("./js/pointpoly");

//pointpoly.i

mapboxgl.accessToken =
  "pk.eyJ1IjoicmllbCIsImEiOiJja3Z1MHVxNzJiaHNjMnVzN2xzdXdiZjg2In0.N8jS-DtW3_96io98zgk4zA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 12,
  center: [-0.118092, 51.509865],
});



//Fetch cars from API and DATABACE
async function getCars() {
  const res = await fetch("/api/v1/cars");
  const data = await res.json();

  const cars = data.data.map(car => {
    return {
      type: "Feature",
      properties: {
        carId: "car ID: " + car.id
      },
      geometry: {
        type: "Point",
        coordinates: [car.location.lng, car.location.lat]

      }
    }
  });

  loadMap(cars);
}

//Load map with cars
function loadMap(cars) {
  map.on("load", function () {
    // Load an image from an external URL.
    map.loadImage(
      "https://i.ibb.co/N3wrnkS/logo-Pin-App-Icon-Main-1024x1024.png",
      function (error, image) {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage("logo-Pin-App-Icon-Main-1024x1024.png", image);

        // Add a data source containing one point feature.
        map.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: cars
          }
        });

        // Add a layer to use the image to represent the data.
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "point", // reference the data source
          layout: {
            "icon-image": "logo-Pin-App-Icon-Main-1024x1024.png", // reference the image
            "icon-size": 0.1,
            "text-field": '{carId}',
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0,2],
            "text-anchor": "top"
          }
        });
      }
    );
  });
}


getCars();

// Add the control to the map.
map.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
  })
);

const draw = new MapboxDraw({
  displayControlsDefault: false,
  // Select which mapbox-gl-draw control buttons to add to the map.
  controls: {
    polygon: true,
    trash: true
  },
  // Set mapbox-gl-draw to draw by default.
  // The user does not have to click the polygon control button first.
  defaultMode: 'draw_polygon'
  });

map.addControl(draw);

map.on('draw.create', updateArea);
map.on('draw.delete', updateArea);
map.on('draw.update', updateArea);



function updateArea(e) {
  const data = draw.getAll();
  const answer = document.getElementById('calculated-area');
  if (data.features.length > 0) {
    //console.log(data.features[0].geometry.coordinates[0]);
    //console.log("the polygon points: " + makePolygon(data));
    //var polygon = makePolygon(data);
    //var point = [-0.1411156996388172,51.51947945935683];
    //console.log(inside(point,polygon));
    const area = turf.area(data);;
    const rounded_area = Math.round(area * 100) / 100;
    answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
  } else {
    answer.innerHTML = '';
    if (e.type !== 'draw.delete')
    alert('Click the map to draw a polygon.');
  } 
}

