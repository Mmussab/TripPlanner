import mapboxgl from 'mapbox-gl';
import marker from './marker';

mapboxgl.accessToken =
  'pk.eyJ1IjoibW11c3NhYjM5IiwiYSI6ImNra2U3eGEzYTBhMHUydm8xZzR1Y3l4dGgifQ.PEhFTiKSzkdIzUCb3MrASQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const tag = document.createElement('div');
tag.style.width = '32px';
tag.style.height = '39px';
tag.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(tag).setLngLat([-74.009, 40.705]).addTo(map);

const newMarker = marker(-73.95, 40.72, 'restaurants');
newMarker.addTo(map);
console.log(newMarker.style.backgroundImage);
