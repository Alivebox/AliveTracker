Ext.define("AliveTracker.controller.home.HomeController", {

    extend:"Ext.app.Controller",

    models:[
        'Group',
        'BelongGroup'
    ],

    stores:[
        'Groups',
        'BelongGroups'
    ],

    init:function () {
        this.control({
            'home': {
                afterrender: this.onHomeAfterRender,
                onCreateNewGroup: this.onCreateNewGroup
            },
            'homegroupsviewer': {
                afterrender: this.onHomeGroupsAfterRender
            }
        });
    },

    onHomeAfterRender: function(){
    },

    onHomeGroupsAfterRender: function(agrAbstractComponent){
        var tmpMe = this;
        var tmpEl = agrAbstractComponent.getEl();
        tmpEl.on('click', tmpMe.onConfirmDeleteDialog, tmpMe, {delegate: '.deleteProject'});
        tmpEl.on('click', tmpMe.onSelectedProjectImage, tmpMe, {delegate: '.projectImage'});
    },

    loadHomeStore: function(){
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
        var tmpBelongGroupsStore = Ext.getStore('BelongGroups');
        tmpBelongGroupsStore.load({
            callback: function(){
            }
        });
    },

    /**
     * Delete a created project
     * */
    onDeleteProject: function(argElement){
        var tmpGroupStore = Ext.getStore('Groups');
        tmpGroupStore.removeAt(tmpGroupStore.find('id', argElement.getAttribute('id')));
        tmpGroupStore.commitChanges();
    },

    /**
     * Show a pop up to confirm the delete action
     * */
    onConfirmDeleteDialog: function(argEvent, argElement) {
        Ext.MessageBox.confirm(
            'Confirm',
            Ext.util.Format.format('Are you sure you want to delete the project?'),
            function(argButton){
                if(argButton == 'yes')
                {
                    this.onDeleteProject(argElement)
                }
            },
            this
        );
    },

    /**
     * Selected project to be modified
     * */
    onSelectedProjectImage: function(argEvent,argElement){
        debugger;
    },

    /**
     * Show a popup to request for the data to create a new project
     * */
    onCreateNewGroup: function(){
        this.addEditGroupPopUp = Ext.create('AliveTracker.view.home.AddEditGroupPopUp');
        this.addEditGroupPopUp.show();
    }
});