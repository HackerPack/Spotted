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
    
    
//----------------------------------------------------------------------------
//---------Wonder why following snippet to get current loc not woking? :( ----
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
    
    //------------------------------------------------------------------------
    //The hard-coding for map related variables
    var grpMembers = 5;
    var temploc = [-25.363882,131.044922];
    var myLatLngs=[];
    
    var markers=[];
    var infoWindows=[];
    var i;
    var names = ['Gautam', 'Shivani', 'Shash', 'Anbu', 'Anany'];
    
  this.makeMap = function() {
    var myLatlng = new google.maps.LatLng(temploc[0],temploc[1]); //hard-coded
    //var myLatlng2 = new google.maps.LatLng(temploc[0]+10,temploc[1]+10);
    
    myLatLngs[0] =new google.maps.LatLng(temploc[0],temploc[1]);
    myLatLngs[1] =new google.maps.LatLng(temploc[0]+5,temploc[1]+5);
    myLatLngs[2] =new google.maps.LatLng(temploc[0]+5,temploc[1]-5);
    myLatLngs[3] =new google.maps.LatLng(temploc[0]-5,temploc[1]+5);
    myLatLngs[4] =new google.maps.LatLng(temploc[0]-5,temploc[1]-5); //2D array
      
      
    //var myLatlng = new google.maps.LatLng(location[0], location[1]);
    var mapOptions = {
    zoom: 4,
    center: myLatlng, //hard-coded
    //center: myLatLngs[0],
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //console.log(document.getElementById('map-canvas'));
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    /*var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
    });

    var marker2 = new google.maps.Marker({
    position: myLatlng2,
    map: map,
    title: 'Hello World!'
    });*/
      
      //------------------------------------------------------------------------
       marker1 = new google.maps.Marker({
           position: myLatLngs[0],
           map: map,
           title: 'Hello World!'
        });
       marker2 = new google.maps.Marker({
           position: myLatLngs[1],
           map: map,
           title: 'Hello World!'
        });
       marker3 = new google.maps.Marker({
           position: myLatLngs[2],
           map: map,
           title: 'Hello World!'
        });
       marker4 = new google.maps.Marker({
           position: myLatLngs[3],
           map: map,
           title: 'Hello World!'
        });
       marker5 = new google.maps.Marker({
           position: myLatLngs[4],
           map: map,
           title: 'Hello World!'
        });      
      //------------------------------------------------------------------------
      
    for(i=0; i<grpMembers; i++){
        markers[0] = new google.maps.Marker({
           position: myLatLngs[i],
           map: map,
           title: 'Hello World!'
        });
        
        infoWindows[i] = new google.maps.InfoWindow({
           content: names[i] 
        });
    }
    
      
    /*var infowindow = new google.maps.InfoWindow({
    content: 'Gautam '
    });
      
    var infowindow2 = new google.maps.InfoWindow({
    content: 'Shivani '
    });*/
      
    //this.makeInfoWindowEvent(map, infowindow, marker);
    /*google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
    
    this.openInfoWindow = function(){
        /*infowindow.open(map, marker);
        infowindow2.open(map, marker2);*/
        
        for(i=0; i<grpMembers; i++){
            infoWindows[i].open(map, markers[i]);
        }
    }
    this.openInfoWindow();
  }
  
  //this.makeInfoWindowEvent = function(map, infowindow, marker) {
  /*  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
  /*for(i=0; i<grpMembers; i++){
  this.makeInfoWindowEvent = function(map, infowindow, markers[i]) {
  /*  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
  //}
  this.makeInfoWindowEvent = function(map, infowindow, marker1) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker2) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker3) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker4) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker5) {}
  
  

  this.initialize();
}
