var GroupListView = function (groups) {

    var groups;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.setGroups(groups);
    };

    this.setGroups = function(list) {
        groups = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(groups));
        return this;
    };

    this.initialize();

}