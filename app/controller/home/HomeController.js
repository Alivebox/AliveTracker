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

    refs:[
        {
            ref:'groupModelForm',
            selector:'addeditprojectpopup form[name=groupModelForm]'
        },
        {
            ref:'main',
            selector:'main'
        },
        {
            ref:'groupdetailform',
            selector:'groupdetailform'
        }
    ],
    init:function () {
        this.control({
            'home': {
                afterrender: this.onHomeAfterRender,
                onCreateNewGroup: this.onCreateNewGroup
            },
            'homegroupsviewer': {
                afterrender: this.onHomeGroupsAfterRender
            },
            'addeditprojectpopup': {
                onSaveAction: this.onSaveAction,
                onUpdateAction: this.onUpdateAction,
                onCloseWindows: this.onCloseWindows
            }
        });
    },

    onHomeAfterRender: function(){
    },

    onHomeGroupsAfterRender: function(agrAbstractComponent){
        var tmpMe = this;
        var tmpEl = agrAbstractComponent.getEl();
        tmpEl.on('click', tmpMe.onConfirmDeleteDialog, tmpMe, {delegate: '.deleteGroup'});
        tmpEl.on('click', tmpMe.onEditGroup, tmpMe, {delegate: '.editGroup'});
        tmpEl.on('click', tmpMe.onShowGroupDetailView, tmpMe, {delegate: '.groupImage'});
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
     * Show GroupDetailView when user click on the imagen in home
     * */
    onShowGroupDetailView: function(){
        this.getMain().setActiveTab(this.getGroupdetailform());
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
    onEditGroup: function(argEvent,argElement){
        this.addEditGroupPopUp = this.getAddEditGroupPopUp(false, argElement);
    },

    /**
     * Show a popup to request for the data to create a new project
     * */
    onCreateNewGroup: function(){
        this.addEditGroupPopUp = this.getAddEditGroupPopUp(true, null);
    },

    /**
     * Returns an instance of a addEditGroupPopUp created
     * */
    getAddEditGroupPopUp: function(argInsertFlat, argElement){
        var tmpAddEditGroupPopUp = Ext.create('AliveTracker.view.home.AddEditGroupPopUp');
        var tmpGroupForm = this.getGroupModelForm();
        var tmpModel = Ext.create('AliveTracker.model.Group');
        if(!argInsertFlat){
            var tmpGroupStore = Ext.getStore('Groups');
            tmpModel = tmpGroupStore.findRecord('name', argElement.getAttribute('id'));
            tmpAddEditGroupPopUp.submitButton.setText('Update');
            tmpGroupForm.loadRecord(tmpModel);
            tmpAddEditGroupPopUp.groupImageField.setSrc('http://src.sencha.io/60/60/'+tmpAddEditGroupPopUp.logoUrlTextField.getValue());
        }
        tmpGroupForm.loadRecord(tmpModel);
        tmpAddEditGroupPopUp.show();
        tmpAddEditGroupPopUp.insert = argInsertFlat;
        return tmpAddEditGroupPopUp;
    },

    /**
     * Will add a new group to the store
     * */
    onSaveAction: function(argEvent){
        var tmpWindow = argEvent;
        var tmpGroupModel = this.onCreateModelFromGroupModelValues();
        var tmpGroupStore = Ext.getStore('Groups');
        tmpGroupStore.add(tmpGroupModel);
        tmpGroupStore.commitChanges();
        tmpWindow.close();
    },

    /**
     * Will update a new group to the store
     * */
    onUpdateAction: function(argEvent){
        var tmpWindow = argEvent;
        this.getGroupModelForm().submit();
        debugger;
        this.onCreateModelFromGroupModelValues();
        var tmpGroupModel = this.onCreateModelFromGroupModelValues();//this.getGroupModelForm().getRecord();
        var tmpGroupStore = Ext.getStore('Groups');
        tmpGroupStore.update
        tmpGroupStore.commitChanges();
        tmpWindow.close();
    },

    /**
     * Creates group model from form values
     * */
    onCreateModelFromGroupModelValues: function(){
        //TODO fix the ID
        var tmpItem = this.getGroupModelForm().getValues();
        var tmpId = this.getGroupModelForm().getRecord().getData().id;
        if(tmpId === 0){
            tmpId = 10;
        }
        var tmpModel = Ext.create('AliveTracker.model.Group', {
            id: tmpId,
            name: tmpItem.name,
            description: tmpItem.description,
            logoUrl: tmpItem.logoUrl,
            webSiteUrl: tmpItem.webSiteUrl
        });
        return tmpModel;
    },

    /**
     * Will close addEditGroupPopUp
     * */
    onCloseWindows: function(argEvent){
        var tmpWindow = argEvent;
        tmpWindow.close();
    }

});