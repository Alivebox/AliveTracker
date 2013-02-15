Ext.define("AliveTracker.controller.group.GroupDetailController", {

    extend: "Ext.app.Controller",
    requires : [
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.group.GroupProjects'
    ],
    models:[
        'User',
        'Project',
        'Role'
    ],

    stores:[
        'Users',
        'Projects',
        'Roles',
        'AssignedUsers'
    ],
    init: function(){
        this.control({
            'groupprojects': {
                addProject : this.onShowProjectPopUp
            },
            'assignuserstoprojectsform': {
                saveUsersToProjectAction : this.onSaveUsersToProjectChanges,
                cancelUsersToProjectAction : this.onCancelUsersToProjectChanges
            },
            'addprojectpopup': {
                addProjectClick : this.onAddProject
            }
        });
    },

    onUserAfterRender: function(){
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
        tmpProjectsStore.removeAll();
        tmpProjectsStore.load({
            callback: function(){
            }
        });
    },

    /**Will show a pop up to request a project*/
    onShowProjectPopUp: function(){
        this.addProjectPopup = Ext.create('AliveTracker.view.users.UserRolesAssignmentPopUp');
        this.addProjectPopup.title = 'New Project';
        this.addProjectPopup.show();
    },

    /**This method will save all users changes*/
    onSaveUsersChanges: function(argPopUp, argWindow){
        var tmpWindow = argWindow;
        debugger;
        tmpWindow.close();
    },

    /**This method will cancel all users changes*/
    onCancelUsersChanges: function(argWindow){
        var tmpWindow = argWindow;
        debugger;
        tmpWindow.close();
    },

    /**This method will save all users assigned to projects changes*/
    onSaveUsersToProjectChanges: function(argPopUp, argWindow){
        var tmpWindow = argWindow;
        debugger;
        tmpWindow.close();
    },

    /**This method will cancel all users assigned to projects changes*/
    onCancelUsersToProjectChanges: function(argWindow){
        var tmpWindow = argWindow;
        debugger;
        tmpWindow.close();
    },

    /**This method will save all projects assigned to users changes*/
    onSaveProjectsToUsersChanges: function(argPopUp, argWindow){
        var tmpWindow = argWindow;
        debugger;
        tmpWindow.close();
    },

    /**This method will cancel all projects assigned to users changes*/
    onCancelProjectsToUsersChanges: function(argWindow){
        var tmpWindow = argWindow;
        debugger;
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