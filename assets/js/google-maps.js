function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -19.78328886388523, lng: 34.88742193066926};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mocambique, Sofala' // Title Location
    });
}