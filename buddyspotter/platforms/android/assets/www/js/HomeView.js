var HomeView = function () {

    var groupListView;

    this.initialize = function () {
    	if(!window.user){
            window.location.hash = "";
        }
        this.$el = $('<div/>');
        var that = this;
<<<<<<< HEAD
        database.getGroups(function(){
            that.render();
=======
        database.getGroups(function(groups){
            that.render(groups);
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
        });
        this.$el.on('click', '#creategroup', function(){window.location.hash = "creategroup";});
        
    };

<<<<<<< HEAD
    this.render = function() {
        this.groupListView = new GroupListView();
        console.log(this.groupListView);
	    this.$el.html(this.template());
=======
    this.render = function(groups) {
        this.groupListView = new GroupListView(groups);
        this.$el.html(this.template(groups));
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
	    $('.content', this.$el).html(this.groupListView.$el);
	    return this;
	};

    this.initialize();

}