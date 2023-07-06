function initMap(){
    var options = {
        zoom:15,
        center:{lat:-0.503095, lng:117.152827}
    }

    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position:{lat:-0.503095, lng:117.152827},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.infoWindow({
        content:'<h1>Kevin Refinaldi Berlin</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    });
}

addMarker({lat:-0.503095, lng:117.152827})

function addMarker(coords){
    var marker = new google.maps.Marker({
        position:coords,
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
}