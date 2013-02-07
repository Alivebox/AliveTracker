Ext.define("AliveTracker.controller.projects.LogBookController", {

    extend: "Ext.app.Controller",
    models:[
        'Group',
        'Project'
    ],

    stores:[
        'Groups',
        'Projects'
    ],

    init: function(){
        this.control({
            'logBookform': {
                afterrender: this.onUserAfterRender

            },
           ' logbookgridheader': {
                newActivity: this.onAddNewActivity
            }
        });
    },

    onUserAfterRender: function(){
    },

    /**Load previous group data stored*/
    loadGroupStore: function(){
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
    },

    /**Load previous project data stored*/
    loadProjectStore: function(){
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback: function(){
            }
        });
    },

    /**Create a new activity and add to the store*/
    onAddNewActivity: function(argEvent){
        debugger;
    }

});