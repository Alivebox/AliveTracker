Ext.define("AliveTracker.controller.projects.AssignUsersToProjectsController", {

    extend:"Ext.app.Controller",
    requires:[
        'AliveTracker.view.projects.AssignUsersToProjects'
    ],
    models:[
        'User'
    ],

    stores:[
        'Users'
    ],

    /**
     * Initializes components listeners
     */
    init:function () {
        this.control({
            'assignuserstoprojectsform':{
                afterrender:this.onUserAfterRender,
                saveAction:this.onSaveAction,
                cancelAction:this.onCancelAction
            }
        });
    },

    /**
     * It´s called after rendere to load al the stores needed
     */
    onUserAfterRender:function () {
        this.loadUsersStore();
    },

    /**
     * Loads the Users store
     */
    loadUsersStore:function () {
        var tmpUsersStore = Ext.getStore('Users');
        tmpUsersStore.load({
            callback:function () {
            }
        });
    },

    /**
     * Saves de data of the current profile
     */
    onSaveAction:function () {
        debugger;
    },

    /**
     * Cancels all information of the profile edition
     */
    onCancelAction:function () {
        debugger;
    }

});