var HomeView = function () {

    var groupListView;

    this.initialize = function () {
    	if(!window.user){
            window.location.hash = "";
        }
        this.$el = $('<div/>');
        var that = this;
        database.getGroups(function(){
            that.render();
        });
    };

    this.render = function() {
        this.groupListView = new GroupListView();
        console.log(this.groupListView);
	    this.$el.html(this.template());
	    $('.content', this.$el).html(this.groupListView.$el);
	    return this;
	};

    this.initialize();

}