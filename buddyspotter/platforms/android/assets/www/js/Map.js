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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    //var myLatlng = new google.maps.LatLng(-25.363882,131.044922)
    console.log(that.latitude);
    console.log(that.longitude);
>>>>>>> 7452bea35d56a1ed798c9c93dff7b0cb7f00cd59
    var myLatlng = new google.maps.LatLng(this.latitude,this.longitude);
    var mapOptions = {
    zoom: 20,
    center: myLatlng,
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
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
<<<<<<< HEAD
    });
      
    var infowindow2 = new google.maps.InfoWindow({
    content: 'Shivani '
    });
      
=======
    });
      
    var infowindow2 = new google.maps.InfoWindow({
    content: 'Shivani '
    });
      
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
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
=======
<<<<<<< HEAD
    });
<<<<<<< HEAD
  }*/
=======
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
=======
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
    });*/
>>>>>>> 7452bea35d56a1ed798c9c93dff7b0cb7f00cd59
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
