mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 12, // starting zoom
});



const marker1 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates[0], listing.geometry.coordinates[1])
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h5>${listing.title}</h5><p>Exact location will be provided after booking!</p>`))
        .addTo(map);

