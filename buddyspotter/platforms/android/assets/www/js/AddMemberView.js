var AddMemberView=function(groupID){
	var memberListView;
	this.initialize=function(){
<<<<<<< HEAD
		this.$el="</div>";
		this.$el.on('click', '#newMember', this.phonePopup);
		
=======
		this.$el=$("<div/>");
		this.$el.on('click', '#newMember', this.phonePopup);
		this.memberListing();
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
	};
	this.render=function(){
		this.$el.html(this.template());
		if(this.memberListView){
			$('.content', this.$el).html(this.memberListView.$el);
		}
	    return this;
	};
	this.memberListing=function(){
		var that=this;
<<<<<<< HEAD
		database.getMembers(function(groupID){
			that.memberListView=new memberListView(groupID);
=======
		database.getMembers(groupID, function(group){
			that.memberListView=new MemberListView(group);
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
			that.render();
		});
	}
	this.phonePopup = function() {
		var successCallback = function(result){
<<<<<<< HEAD
			setTimeout(function(){alert(result.name + " " + result.phoneNumber);
				database.addMember(groupID,result.name,result.phoneNumber);
=======
			setTimeout(function(){
				database.addUserToGroup(groupID, {"first_name": result.name, "phone": result.phoneNumber});
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
			},0);
			
		};
		var failedCallback = function(result){
			setTimeout(function(){alert(result);},0);
		}
		document.addEventListener("deviceready", function() {
		window.plugins.contactNumberPicker.pick(successCallback,failedCallback);
		
		},false);
    
	};
<<<<<<< HEAD
	
=======
	this.initialize();
>>>>>>> 963e588696b388a885aa3aef6343a1d2b0f828d5
}

			

            
            