var LoginView = function (service) {

    var loginView;

    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '#login', this.login);
        this.render();
    };

    this.render = function() {
	    this.$el.html(this.template());
	    return this;
	};

	this.login = function() {
	    database.login();
	};

    this.initialize();

}