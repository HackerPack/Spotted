var MapView = function () {

  this.initialize = function () {
    this.$el = $('<div/>');
    this.render();
    google.maps.event.addDomListener(window, 'load', this.makeMap);
  }
  this.render = function() {
    this.$el.html(this.template());
    return this;
  };
  this.makeMap = function() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      });
    } 
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log(document.getElementById('map-canvas'));

    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
    });

    var infowindow = new google.maps.InfoWindow({
    content: 'test: '
    });
    //this.makeInfoWindowEvent(map, infowindow, marker);
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });
  }
  this.makeInfoWindowEvent = function(map, infowindow, marker) {
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });
  }

  this.initialize();
}
