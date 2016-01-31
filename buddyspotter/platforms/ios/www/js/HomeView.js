var HomeView = function () {

    var groupListView;

    this.initialize = function () {
    	if(!window.user){
            window.location.hash = "";
        }
        this.$el = $('<div/>');
        var that = this;
        database.getGroups(function(groups){
	        that.groupListView = new GroupListView(groups);
	        that.render();
        });
    };

    this.render = function() {
	    this.$el.html(this.template());
<<<<<<< HEAD
=======
		console.log(groupListView);
>>>>>>> 04a21f2f288bb936828daad50dae7c6b058cf331
	    $('.content', this.$el).html(groupListView.$el);
	    return this;
	};

    this.initialize();

}