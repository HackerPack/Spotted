var HomeView = function () {

    var groupListView;

    this.initialize = function () {
    	if(!window.user){
            window.location.hash = "";
        }
        this.$el = $('<div/>');
        var that = this;
        database.getGroups(function(groups){
            that.render(groups);
        });
        this.$el.on('click', '#creategroup', function(){window.location.hash = "creategroup";});
        
    };

    this.render = function(groups) {
        this.groupListView = new GroupListView(groups);
        this.$el.html(this.template(groups));
	    $('.content', this.$el).html(this.groupListView.$el);
	    return this;
	};

    this.initialize();

}