import mapbox from 'mapbox-gl';
const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

function marker(long, lat, type) {
  const marker = document.createElement('div');
  marker.style.width = '32px';
  marker.style.height = '39px';

  marker.style.backgroundImage = `url(${iconURLs[type]})`;

  return new mapbox.Marker(marker).setLngLat([long, lat]);
}

export default marker;
