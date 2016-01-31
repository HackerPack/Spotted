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
		console.log(groupListView);
=======
>>>>>>> ce746f0f1ea181790168e2694cd5c7a4ef808b88
	    $('.content', this.$el).html(groupListView.$el);
	    return this;
	};

    this.initialize();

}