Ext.define("AliveTracker.controller.projects.LogBookController", {

    extend:"Ext.app.Controller",
    refs:[
        {
            ref:'logBookForm',
            selector:'logBookform'
        },
        {
            ref:'logBookGridHeader',
            selector:'logbookgridheader'
        },
        {
            ref:'logBookGrid',
            selector:'logbookgrid'
        }
    ],
    requires:[
        'AliveTracker.view.projects.ProjectBook',
        'AliveTracker.view.projects.LogBook',
        'AliveTracker.view.projects.LogBookGridHeader',
        'AliveTracker.view.projects.LogBookGrid'
    ],

    models:[
        'Group',
        'Project',
        'projects.LogBookForm'
    ],

    stores:[
        'Groups',
        'Projects',
        'LogBook'
    ],

    /**
     *Initialization of all items
     */
    init:function () {
        this.control({
            'logBookform':{
                afterrender:this.onUserAfterRender

            },
            ' logBookform':{
                newActivity:this.onAddNewActivity,
                datePickerChanged:this.onDatePickerChange
            }
        });
    },

    /**
     *Function called after renderization
     */
    onUserAfterRender:function () {
    },

    /**
     * Load previous group data stored
     */
    loadGroupStore:function () {
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback:function () {
            }
        });
    },

    /**
     * Load previous project data stored
     */
    loadProjectStore:function () {
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback:function () {
            }
        });
    },

    /**
     * Create a new activity and add to the store
     */
    onAddNewActivity:function (argEvent) {
        var tmpLogBookFormBasic = this.getLogBookForm().getForm();
        if (!tmpLogBookFormBasic.isValid()) {
            return;
        }
        var tmpModel = Ext.create('AliveTracker.model.projects.LogBookForm');
        tmpLogBookFormBasic.updateRecord(tmpModel);
        argEvent.store.add(tmpModel);
        this.onClearUsersSelection();
    },

    /**
     * Clears all editable components on screen
     */
    onClearUsersSelection: function(){
        this.getLogBookForm().groupComboBox.reset();
        this.getLogBookForm().projectComboBox.reset();
        this.getLogBookGridHeader().activityTextField.reset();
        this.getLogBookGridHeader().timeTextField.reset();
    },

    /**
     * Handles all the logic asociated to the date changed action
     * @param argDatePicker component
     */
    onDatePickerChange: function(argDatePicker){
        argDatePicker.getValue();
        this.getLogBookGrid().getStore().removeAll();
        debugger;
    }

});