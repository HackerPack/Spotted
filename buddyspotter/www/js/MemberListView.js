var MemberListView = function (group) {

    var members;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.setMembers();
    };

    this.setMembers = function() {
        members= group;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(members));
        return this;
    };

    this.initialize();

}