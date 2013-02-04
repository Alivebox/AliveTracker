Ext.define("AliveTracker.controller.projects.AssignUsersToProjectsController", {

    extend: "Ext.app.Controller",
    requires : [
        'AliveTracker.view.projects.AssignUsersToProjects'
    ],
    models:[
        'User'
    ],

    stores:[
        'Users'
    ],
    init: function(){
        this.control({
            'assignuserstoprojectsform': {
                afterrender: this.onUserAfterRender
            }
        });
    },
    onUserAfterRender: function(){
        this.loadUsersStore();
    },

    loadUsersStore: function(){
        var tmpUsersStore = Ext.getStore('Users');
        tmpUsersStore.load({
            callback: function(){
            }
        });
    }

});