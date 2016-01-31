var MapView = function (groupID) {
  var that;
  var markers = [];
  var infoWindows = [];
  var myLatLngs=[];
  this.initialize = function () {
    that = this;
    //The hard-coding for map related variables
    //var grpMembers = 5;
    //var temploc = [-25.363882,131.044922];
    
    //var markers=[];
    //var infoWindows=[];
    //var i;
    //var names = ['Gautam', 'Shivani', 'Shash', 'Anbu', 'Anany'];
    var markers=[];
    var infoWindows=[];
    //var i;
    //var names = ['Gautam', 'Shivani', 'Shash', 'Anbu', 'Anany'];
    this.$el = $('<div/>');
    this.render();

    //navigator.geolocation.getCurrentPosition(onSuccess,onError);
  };
  
  this.render = function() {
    this.$el.html(this.template());
    window.setTimeout(function(){
      that.makeMap();
    },1000);
    return this;
  };
    
  this.makeMap = function() {
    var myLatlng = new google.maps.LatLng(window.user.latitude, window.user.longitude);
    var mapOptions = {
      zoom: 20,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    database.getMembersWithLoc(groupID, function(users){
      for(var i=0; i<markers.length; i++){
        that.markers[i].setMap(null);
      }
      for(var i=0; i<infoWindows.length; i++){
        that.infoWindows[i].close();
      }
      that.markers = [];
      that.myLatLngs = []
      that.infoWindows = [];

      for(i=0; i<users.length; i++){
        if(users[i].latitude && users[i].longitude){
          var ll = new google.maps.LatLng(users[i].latitude, users[i].longitude);
          that.myLatLngs.push(ll);

          var marker = new google.maps.Marker({
                 position: ll,
                 map: map,
                 title: users[i].first_name
          });
          that.markers.push(marker);

          var infoWindow = new google.maps.InfoWindow({
             content: users[i].first_name
          });

          that.infoWindows.push(infoWindow);

          infoWindow.open(map, marker);
        }
      }

    });
  };
  
  this.initialize();
}
