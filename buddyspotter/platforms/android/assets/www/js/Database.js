var database = (function(){

    var FIRE_BASE_URL = "https://dazzling-heat-9890.firebaseio.com/";
    var USER_TABLE = "user/";
    var GROUP_TABLE = "group/";
    var USER_GROUP_TABLE = "user_group/";
    var ref = new Firebase(FIRE_BASE_URL);
    
    var res = {};

    res.createUser = function(first_name, last_name, phone_no){
      var userRef = new Firebase(FIRE_BASE_URL+USER_TABLE);
      var data = {"first_name": first_name,
                  "last_name": last_name,
                  "phone": phone_no
      };
      var obj = userRef.push(data);
      return obj.key();
    }

    res.getUser = function(userId, callback){
        var userRef = new Firebase(FIRE_BASE_URL+USER_TABLE+userId);
        userRef.once('value', function(data) {
                callback(data.val());
        });
    }

    res.loadUser = function(callback){
        if(!window.currentUser){
            res.getUser(window.userKey, function(val){
                window.currentUser = val;
                callback();
            });
        }
    }

    res.getGroups = function(callback){
        var groupRef = new Firebase(FIRE_BASE_URL+GROUP_TABLE);
<<<<<<< HEAD
        groupRef.on("child_added", function(snapshot, prevChildKey) {
          var newItem = snapshot.val();
          callback(newItem, prevChildKey)
=======
        groupRef.on("value", function(snapshot, prevChildKey) {
          var newItem = snapshot.val();
          if(newItem){
              var res = [];
              for(var key in newItem){
                  for(var kk in newItem[key].user){
                    if(newItem[key].user[kk].phone == window.user.phone){
                        res.push(newItem[key]);
                    }
                  }
              }
              callback(res)
          }
        });
    }

    res.getMembers = function(groupID, callback){
        var groupRef = new Firebase(FIRE_BASE_URL+GROUP_TABLE+groupID);
        groupRef.on("value", function(snapshot, prevChildKey) {
          var newItem = snapshot.val();
          var res = [];
          if(newItem){
              for(var key in newItem.user){
                res.push(newItem.user[key]);
              }
          }
          callback(res);
>>>>>>> 04a21f2f288bb936828daad50dae7c6b058cf331
        });
    }

    res.createGroup = function(group_name){
      var groupRef = new Firebase(FIRE_BASE_URL+GROUP_TABLE);
<<<<<<< HEAD
      var data = {"name": group_name};
      var obj = groupRef.push(data);
      return obj.key();
=======
      var data = {"name": group_name, "user": {}};
      data["user"][window.user.key] = window.user;
      var obj = groupRef.push(data);
      return obj.key();
    }

    res.addUserToGroup = function(group_id, user){
      var groupRef = new Firebase(FIRE_BASE_URL+GROUP_TABLE+group_id+"/user");
      var obj = groupRef.push(user);
      return obj.key();
>>>>>>> 04a21f2f288bb936828daad50dae7c6b058cf331
    }


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