var AddMemberView=function(groupID){
	var memberListView;
	this.initialize=function(){
		this.$el="</div>";
		this.$el.on('click', '#newMember', this.phonePopup);
		
	};
	this.render=function(){
		this.$el.html(this.template());
		$('.content', this.$el).html(memberListView.$el);
	    return this;
	};
	this.memberListing=function(){
		var that=this;
		database.getMembers(function(groupID){
			that.memberListView=new memberListView(groupID);
			that.render();
		});
	}
	this.phonePopup = function() {
		var successCallback = function(result){
			setTimeout(function(){alert(result.name + " " + result.phoneNumber);
				database.addMember(groupID,result.name,result.phoneNumber);
			},0);
			
		};
		var failedCallback = function(result){
			setTimeout(function(){alert(result);},0);
		}
		document.addEventListener("deviceready", function() {
		window.plugins.contactNumberPicker.pick(successCallback,failedCallback);
		
		},false);
    
	};
	
}

			

            
            