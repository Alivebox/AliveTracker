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
    refs: [
        {
            ref: 'itemSelector',
            selector: 'assignprojectstousersform #itemselectorProjects'
        }
    ],

    /**
     * Initializes components listeners
     */
    init:function () {
        this.control({
            'assignprojectstousersform':{
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
        this.loadProjectsStore();
    },

    /**
     * Loads the Projects store
     */
    loadProjectsStore:function () {
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback:function () {
            }
        });
    },

    /**
     * Saves de data of the current profile
     */
    onSaveAction:function () {
        var tmpItemSelector = this.getItemSelector().items.items[0].lastValue;
        debugger;
    },

    /**
     * Cancels all information of the profile edition
     */
    onCancelAction:function () {
        debugger;
    }

});