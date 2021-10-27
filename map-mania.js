function block_none(){
 document.getElementById('hidden-div').classList.add('show');
document.getElementById('button-id').classList.add('hide');
}
let gMap;
var i = 0;
var places = [
    {content:"Marker 1 hint",lat:27.9506,lng:-82.4572}, //tampa bay
    {content:"Marker 2 hint",lat:38.0803,lng:-89.3820}, //pinckneyville, il
    {content:"Marker 3 hint",lat:61.2181,lng:149.9003}, //Anchorage, alaska
    {content:"Marker 4 hint",lat:38.8339,lng:104.8214}, //colorado springs, colorado
    {content:"Marker 5 hint",lat:36.1627,lng:86.7816}, //nashville, tennessee


]
function initMap() {

    gMap = new google.maps.Map(document.getElementById('mapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

}

function updateGames() {
    var zoomLv1 = gMap.getZoom()
    console.log(zoomv1);
    var inBounds = false;

    if( gMap.getBounds().contains(places[i]&&zoomv1)==8) {
        inBounds = true;
        console.log("inBounds:" + inBounds+"zoomLevel: "+zoomLv1+"i"+i);
        var marker = new google.mapsMarker({position:places[i], gMap:gMap});
        var infoWindow = new google.mapsInfoWindow(places[i]);
        marker.addListener('click', function(){
            infoWindow.open(gMap, marker);
        });
        i++;
    }
}

function initApplication() {
    console.log("Map Mania Starting!")
    console.log(places[8].lat)
}


    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });


function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;
    var score = 0;
    console.log(favoritePlaces[0]);

 

    if (gMap.getBounds().contains(places[0])&&zoomLevel==8) {
        inBounds = true;
        score = score + 1;
        console.log("inBounds:" +inBounds+" zoomLevel:" +zoomLevel, "score", score);
        var marker0 = new google.maps.Marker({position:{lat:(places[0].lng)}, map:gMap});
        marker0.setIcon('https://maps.google.com/mapfiles/ms/micons/green-pushpin.png');
        var infoWindow0 = new google.maps.InfoWindow({content:favoritePlaces[0].content});
        marker0.addListener('click', function() {infoWindow0.opem(gMap,marker0);});

    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}


function initApplication() {
    console.log('Map Mania - Starting!');
}
