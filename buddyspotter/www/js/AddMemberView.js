var AddMemberView=function(groupID){
	var memberListView;
	this.initialize=function(){
		this.$el=$("<div/>");
		this.$el.on('click', '#newMember', this.phonePopup);
		this.memberListing();
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
		database.getMembers(groupID, function(group){
			that.memberListView=new MemberListView(group);
			that.render();
		});
	}
	this.phonePopup = function() {
		var successCallback = function(result){
			setTimeout(function(){
				var p = result.phoneNumber;
				p = p.split(" ").join("");
				p = p.split("(").join("");
				p = p.split(")").join("");
				p = p.split("+").join("");
				p = p.split("-").join("");
				while(p.length > 10){
					p = p.substring(1);
				}
				database.addUserToGroup(groupID, {"first_name": result.name, "phone": p});
			},0);
			
		};
		var failedCallback = function(result){
			setTimeout(function(){alert(result);},0);
		}
		document.addEventListener("deviceready", function() {
		window.plugins.contactNumberPicker.pick(successCallback,failedCallback);
		
		},false);
    
	};
	this.initialize();
}

			

            
            