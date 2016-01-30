var database = (function(){

    var FIRE_BASE_URL = "https://dazzling-heat-9890.firebaseio.com/";
    var USER_TABLE = "user/";
    var GROUP_TABLE = "group/";
    var USER_GROUP_TABLE = "user_group/";
    var ref = new Firebase(FIRE_BASE_URL);
    
    var res = {};

    res.isNewUser = true;

    res.getId = function(authData){
        return authData.facebook.id;
    }

    res.getFName = function(authData){
        return authData.facebook.cachedUserProfile.first_name;
    }

    res.getLName = function(authData){
        return authData.facebook.cachedUserProfile.last_name;
    }

    res.checkSession = function(){
        var authData = ref.getAuth();
        if(authData){
            window.alert("SHIT");
        }
    }

    res.login = function(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData.facebook.cachedUserProfile.first_name);
                res.checkSession();
            }
        }, {
            remember: "sessionOnly"
        });
    }

    res.checkSessionLogin = function(){
        authData = ref.getAuth();
        if(authData == null){
            console.log("FUCK UP");
        }
        else{
            window.full_name = getFName(authData) + " " + getLName(authData);
        }
    }

    res.logout = function(){
        ref.unauth();
        console.log("FUCK UP");
    }

    ref.onAuth(function(authData) {
      if (authData && res.isNewUser) {
        ref.child("user").child(authData.facebook.id).set({
          fname: getFName(authData),
          lname: getLName(authData),
          id: getId(authData)
        });
      }
    });

    return res;
})();