// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    GroupListView.prototype.template = Handlebars.compile($("#group-list-tpl").html());
	CreateGroupView.prototype.template=Handlebars.compile($("#group-create-tpl").html());
	AddMemberView.prototype.template=Handlebars.compile($("#add-member-tpl").html());
    MemberListView.prototype.template = Handlebars.compile($("#member-list-tpl").html());
    MapView.prototype.template = Handlebars.compile($("#map-tpl").html());
    var slider = new PageSlider($('body'));


    router.addRoute('', function() {
      slider.slidePage(new LoginView().render().$el);
    });

    router.addRoute('home', function() {
      slider.slidePage(new HomeView().render().$el);
    });	
	
	router.addRoute('creategroup',function(){
		slider.slidePage(new CreateGroupView().render().$el);
	});
	
	router.addRoute('addmember/:id',function(id){
		slider.slidePage(new AddMemberView(id).render().$el);		
	});
    router.addRoute('map/:id', function(id) {
      slider.slidePage(new MapView(id).render().$el);
    });
    router.start();
    
    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "BuddySpotter", // title
                    'OK'        // buttonName
                );
            };
        }
        FastClick.attach(document.body);
    }, false);


    /* ---------------------------------- Local Functions ---------------------------------- */


}());