Ext.define("AliveTracker.controller.group.GroupDetailController", {

    extend: "Ext.app.Controller",
    requires : [
        'AliveTracker.view.group.InviteUserPopUp',
        'AliveTracker.view.group.AddProjectPopUp'
    ],
    models:[
        'User'
    ],

    stores:[
        'Users'
    ],
    init: function(){
        /**this.control({
            'groupdetailform button[name=btnInvite]': {
                click: this.onInviteUserClick
            }
        });*/
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
        this.loadUserStore();
    },

    loadUserStore: function(){
        var tmpGroupsStore = Ext.getStore('Users');
        tmpGroupsStore.load({
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
        tmpWindow.close();
    }
});