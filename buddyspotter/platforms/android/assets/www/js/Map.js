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
    
    navigator.geolocation.getCurrentPosition(function(position)
{
    // just to show how to access latitute and longitude
    var location = [position.coords.latitude, position.coords.longitude];
},
function(error)
{
    // error getting GPS coordinates
    alert('code: ' + error.code + ' with message: ' + error.message + '\n');
}, 
{ enableHighAccuracy: true});
    
  this.makeMap = function() {
    //var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var myLatlng = new google.maps.LatLng(location);
    var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //console.log(document.getElementById('map-canvas'));
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
    });

    var infowindow = new google.maps.InfoWindow({
    content: 'test: '
    });
    //this.makeInfoWindowEvent(map, infowindow, marker);
    /*google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
    
    this.openInfoWindow = function(){
        infowindow.open(map, marker);
    }
    this.openInfoWindow();
  }
  this.makeInfoWindowEvent = function(map, infowindow, marker) {
  /*  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
  }

  this.initialize();
}
