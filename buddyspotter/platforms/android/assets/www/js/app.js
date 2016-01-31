// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    GroupListView.prototype.template = Handlebars.compile($("#group-list-tpl").html());
<<<<<<< HEAD
	CreateGroupView.prototype.template=Handlebars.compile($("#group-create-tpl").html());
	AddMemberView.prototype.template=Handlebars.compile($("#add-member-tpl").html());
=======
    MapView.prototype.template = Handlebars.compile($("#map-tpl").html());
>>>>>>> ce746f0f1ea181790168e2694cd5c7a4ef808b88
    var slider = new PageSlider($('body'));


    router.addRoute('', function() {
      //slider.slidePage(new LoginView().render().$el);
      slider.slidePage(new MapView().render().$el);
    });

    router.addRoute('home', function() {
      slider.slidePage(new HomeView().render().$el);
    });
<<<<<<< HEAD
	
	
	router.addRoute('creategroup',function(){
		slider.slidePage(new CreateGroupView().render().$el);
	});
	
	router.addRoute('addmember/:id',function(id){
		slider.slidePage(new AddMemberView(id).render().$el);		
	});
	
=======
    router.addRoute('map', function() {
      slider.slidePage(new MapView().render().$el);
    });
>>>>>>> ce746f0f1ea181790168e2694cd5c7a4ef808b88
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