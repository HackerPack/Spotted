var LoginView = function (service) {

    var loginView;

    this.initialize = function () {
        this.$el = $('<div/>');
		var successCallback = function(result){
			setTimeout(function(){alert(result.name + " " + result.phoneNumber);},0);
			
		};
		var failedCallback = function(result){
			setTimeout(function(){alert(result);},0);
		}
		window.plugins.contactNumberPicker.pick(successCallback,failedCallback);
		
        this.$el.on('click', '#login', this.login);
        window.user = JSON.parse(window.localStorage.getItem("bs_login_key"));
        if(window.user){
                window.location.hash = "home";
        }
        else{
            this.render();
        }
    };

    this.render = function() {
	    this.$el.html(this.template());
	    return this;
	};

	this.login = function() {
        var phone_no = $("#phone_no", this.$el).val();
        var first_name = $("#first_name", this.$el).val();
        var last_name = $("#last_name", this.$el).val();
        if(phone_no.length != 10 || isNaN(phone_no)){
            $("#msg", this.$el).html("Invalid phone number");
            return;
        }
		
	    var key = database.createUser(first_name, last_name, phone_no);
        window.user = { "key": key,
                        "first_name": first_name,
                        "last_name": last_name,
                        "phone": phone_no
        }
        window.localStorage.setItem("bs_login_key", JSON.stringify(window.user));
        window.location.hash = "home";
	};

    this.initialize();

}