var memberListView = function (groupName) {

    var members;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.setMembers(groupID);
    };

    this.setMembers = function(list) {
        members= list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(members));
        return this;
    };

    this.initialize();

}