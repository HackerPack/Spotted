var HomeView = function () {

    var groupListView;

    this.initialize = function () {
    	if(!window.user){
            window.location.hash = "";
        }
        this.startLocationTracker();
        this.$el = $('<div/>');
        var that = this;
        database.getGroups(function(groups){
            that.render(groups);
        });
        this.$el.on('click', '#creategroup', function(){window.location.hash = "creategroup";});
        
    };

    this.startLocationTracker = function(){
        var onSuccess = function (position) {
            window.user.latitude = position.coords.latitude; 
            window.user.longitude = position.coords.longitude;
            database.updateUser();
        };
        var onError = function (error){
            console.log('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
        };
        window.setInterval(function(){
            navigator.geolocation.getCurrentPosition(onSuccess,onError);
        }, 100);
    };

    this.render = function(groups) {
        this.groupListView = new GroupListView(groups);
        this.$el.html(this.template(groups));
	    $('.content', this.$el).html(this.groupListView.$el);
	    return this;
	};

    this.initialize();

}