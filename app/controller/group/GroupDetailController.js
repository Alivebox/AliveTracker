Ext.define("AliveTracker.controller.group.GroupDetailController", {

    extend: "Ext.app.Controller",
    requires : [
        'AliveTracker.view.group.InviteUserPopUp',
        'AliveTracker.view.group.AddProjectPopUp'
    ],
    models:[
        'User',
        'Project'
    ],

    stores:[
        'Users',
        'Projects'
    ],
    init: function(){
        this.control({
            'groupdetailform': {
                inviteUser: this.onShowInviteUserPopUp,
                addProject : this.onShowProjectPopUp,
                afterrender: this.onUserAfterRender
            },
            'inviteuserpopup': {
                inviteUser : this.onInviteUserMail
            },
            'addprojectpopup': {
                addProjectClick : this.onAddProject
            }
        });
    },

    onUserAfterRender: function(){
        this.loadGroupStore();
        this.loadProjectStore();
    },

    loadGroupStore: function(){
        var tmpGroupsStore = Ext.getStore('Users');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
    },

    loadProjectStore: function(){
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback: function(){
            }
        });
    },

    /**Will show a pop up to request a user mail*/
    onShowInviteUserPopUp: function(){
        this.addProjectPopup = Ext.create('AliveTracker.view.group.InviteUserPopUp');
        this.addProjectPopup.show();
    },

    /**Will show a pop up to request a project*/
    onShowProjectPopUp: function(){
        this.addProjectPopup = Ext.create('AliveTracker.view.group.AddProjectPopUp');
        this.addProjectPopup.show();
    },

    /**This method will send a email*/
    onInviteUserMail: function(argEvent){
        var tmpWindow = argEvent;
        tmpWindow.close();
    },

    /**This method will add a project*/
    onAddProject: function(argEvent){
        var tmpWindow = argEvent;
        var tmpProjectName = argEvent.projectTextField.value;
        this.loadProjectToStore(tmpProjectName);
        tmpWindow.close();
    },

    /**Method in charge to load element to a project store*/
    loadProjectToStore: function(argProjectName){
        var tmpProjectStore = Ext.getStore('Projects');
        var tmpProjectModel = tmpProjectStore.getProxy().getModel();
        var tmpProject = new tmpProjectModel({name: argProjectName});
        tmpProjectStore.add(tmpProject);
        tmpProjectStore.commitChanges();
    }

});