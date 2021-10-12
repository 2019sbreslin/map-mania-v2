 
var gMap;

function initMap() {

    gMap = new google.maps.Map(document.getElementById('mapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    var marker = new google.maps.Marker({position:{lat:38.0803,lng:-89.3820}, map:gMap});
    var marker2 = new google.maps.Marker({position:{lat:27.9506,lng:-82.4572}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Tampa, Florida'});
    marker.addListener('click', function() {
        infoWindow.open(gMap, marker);
    });

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
}

function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:27.9506,lng:-82.4572})) {
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function initApplication() {
    console.log('Map Mania - Starting!');
}
