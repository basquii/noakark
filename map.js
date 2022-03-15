var mymap = L.map('mapid').setView([34.618721, -89.964546], 5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWxsaW90Y2FzZSIsImEiOiJja212Mmg2eHcwMTN2MnZudmMzcm9xZGM2In0.18FuCg-1O5iwkJ5iG59ETA'
}).addTo(mymap);



const marker = L.marker([35.952460, -83.991530]).addTo(mymap);
marker.bindPopup("<b>Main Office</b>").closePopup();


marker.on('click', function (e) {
    mymap.setView([35.952460, -83.991530], 16);
});



const markerTwo = L.marker([29.897430, -97.827510]).addTo(mymap);
markerTwo.bindPopup("<b>Office II</b>").closePopup();

markerTwo.on('click', function (e) {
    mymap.setView([29.897430, -97.827510], 16);
});