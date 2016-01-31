var CreateGroupView=function(){
	
	var newGroup;
	
	this.initialize= function(){
		this.$el=$('<div/>');
		this.$el.on('click', '#addmember', this.creategroup);
		this.render();
	};
	
	this.render=function(){
		this.$el.html(this.template());
        return this;
	};
	
	this.creategroup=function(){
		newGroup=$("#group_name",this.$el).val();
		var groupID=database.createGroup(newGroup);
		console.log(groupID);
		window.location.hash="addmember/"+groupID;
	};
	
	
	this.initialize();
}