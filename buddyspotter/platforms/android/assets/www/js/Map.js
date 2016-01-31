var MapView = function (groupID) {
  var that;
  this.initialize = function () {
    that = this;
    //The hard-coding for map related variables
    var grpMembers = 5;
    var temploc = [-25.363882,131.044922];
    
    var markers=[];
    var infoWindows=[];
    var i;
    var names = ['Gautam', 'Shivani', 'Shash', 'Anbu', 'Anany'];
    this.$el = $('<div/>');
    this.render();
    navigator.geolocation.getCurrentPosition(onSuccess,onError);
  }
  
  this.render = function() {
    this.$el.html(this.template());
    return this;
  };
    
  this.makeMap = function() {
    var myLatlng = new google.maps.LatLng(this.latitude,this.longitude);
    var mapOptions = {
    zoom: 20,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var myLatLngs=[];
    myLatLngs[0] =new google.maps.LatLng(this.latitude+1,this.longitude+1);
    myLatLngs[1] =new google.maps.LatLng(this.latitude+1,this.longitude-1);
    myLatLngs[2] =new google.maps.LatLng(this.latitude-1,this.longitude+1);
    myLatLngs[3] =new google.maps.LatLng(this.latitude-1,this.longitude-1);
    myLatLngs[4] =new google.maps.LatLng(this.latitude+1,this.longitude+1.5); //2D array
      
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      
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
        /*markers[0] = new google.maps.Marker({
           position: myLatLngs[i],
           map: map,
           title: 'Hello World!'
        });*/
        
        infoWindows[i] = new google.maps.InfoWindow({
           content: names[i] 
        });
    }
    
      
    var infowindow1 = new google.maps.InfoWindow({
    content: 'Gautam '
    });
      
    var infowindow2 = new google.maps.InfoWindow({
    content: 'Shivani '
    });
      
    var infowindow3 = new google.maps.InfoWindow({
    content: 'Shash '
    });
      
    var infowindow4 = new google.maps.InfoWindow({
    content: 'Anbu '
    });
      
      
    var infowindow5 = new google.maps.InfoWindow({
    content: 'Anany '
    });
      
      
    //this.makeInfoWindowEvent(map, infowindow, marker);
    /*google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
        
        /*for(i=0; i<grpMembers; i++){
            infoWindows[i].open(map, markers[i]);
        }*/
  this.makeInfoWindowEvent = function(map, infowindow, marker1) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker2) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker3) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker4) {}
  this.makeInfoWindowEvent = function(map, infowindow, marker5) {}
  }
  
  //this.makeInfoWindowEvent = function(map, infowindow, marker) {}
    /*google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
<<<<<<< HEAD
    });
  }*/
  /*for(i=0; i<grpMembers; i++){
  this.makeInfoWindowEvent = function(map, infowindow, markers[i]) {
  /*  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });*/
  //}
  var onSuccess = function (position) {
    console.log("something")
    that.latitude = position.coords.latitude; 
    that.longitude = position.coords.longitude;
    that.makeMap();
    };
  var onError = function (error){
      alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    };
  /*this.openInfoWindow = function(){
        infowindow1.open(map, marker1);
        infowindow2.open(map, marker2);
        infowindow3.open(map, marker3);
        infowindow4.open(map, marker4);
        infowindow5.open(map, marker5);
    }*/
  this.initialize();
}
