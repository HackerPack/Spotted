var AddMemberView=function(groupID){
	var memberListView;
	this.initialize=function(){
		this.$el="</div>";
		var that=this;
		database.getMembers(function(groupID){
			that.memberListView=new memberListView(groupID);
			that.render();
		});
	};
	this.render=function(){
		this.$el.html(this.template());
		$('.content', this.$el).html(memberListView.$el);
	    return this;
	};
	this.findByName = function() {
    service.findByName($('.search-key').val()).done(function(contactName) {
       // contactList.setContacts(contactName);
	    // Show Contact Picker
		var successCallback = function(result){
			setTimeout(function(){alert(result.name + " " + result.phoneNumber);},0);
			
		};
		var failedCallback = function(result){
			setTimeout(function(){alert(result);},0);
		}
		window.plugins.contactNumberPicker.pick(successCallback,failedCallback);	
    });
};
	
}

			

            
            