Ext.define("AliveTracker.controller.projects.AssignProjectsToUsersController", {

    extend:"Ext.app.Controller",
    requires:[
        'AliveTracker.view.projects.AssignProjectsToUsers'
    ],
    models:[
        'Project'
    ],

    stores:[
        'Projects'
    ],
    init:function () {
        this.control({
            'assignprojectstousersform':{
                afterrender:this.onUserAfterRender,
                saveAction:this.onSaveAction,
                cancelAction:this.onCancelAction
            }
        });
    },
    onUserAfterRender:function () {
        this.loadProjectsStore();
    },

    loadProjectsStore:function () {
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback:function () {
            }
        });
    },
    onSaveAction:function () {
        debugger;
    },
    onCancelAction:function () {
        debugger;
    }

});