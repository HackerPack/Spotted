var MapView = function () {
  var that;
  this.initialize = function () {
    that = this;
    this.$el = $('<div/>');
    this.render();
    navigator.geolocation.getCurrentPosition(onSuccess,onError);
  }
  this.render = function() {
    this.$el.html(this.template());
    return this;
  };
  this.makeMap = function() {
    //var myLatlng = new google.maps.LatLng(-25.363882,131.044922)
    console.log(that.latitude);
    console.log(that.longitude);
    var myLatlng = new google.maps.LatLng(this.latitude,this.longitude);
    var myLatlng = {
        lat: that.latitude,
        lng: that.longitude
      };
    var mapOptions = {
    zoom: 20,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
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
  var onSuccess = function (position) {
    that.latitude = position.coords.latitude; 
    that.longitude = position.coords.longitude;
    //google.maps.event.addDomListener(window, 'load', that.makeMap);
    that.makeMap();
  };
  var onError = function (error){
    alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
  };
  this.initialize();
}
