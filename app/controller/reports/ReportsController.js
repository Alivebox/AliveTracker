Ext.define('AliveTracker.controller.reports.ReportsController', {

    extend: 'Ext.app.Controller',
    requires : [
        'AliveTracker.view.reports.Reports'
    ],
    models:[
        'Project',
        'User',
        'Group'
    ],

    stores:[
        'Projects',
        'Users',
        'Groups'
    ],
    refs: [
        {
            ref: 'group',
            selector: 'reportsform #groupReports'
        },
        {
            ref: 'project',
            selector: 'reportsform #projectReports'
        },
        {
            ref: 'user',
            selector: 'reportsform #userReports'
        },
        {
            ref: 'dateRange',
            selector: 'reportsform #dateRangeReports'
        }
    ],

    /**
     * Initializes components listeners
     */
    init: function(){
        this.control({
            'reportsform': {
                afterrender: this.onReportsAfterRender,
                exportReport: this.onExportReport
            }
        });
    },

    /**
     * Exports the report
     */
    onExportReport: function(){
        var tmpGroup = this.getGroup().value;
        var tmpProject = this.getProject().value;
        var tmpUser = this.getUser().value;
        var tmpDateRange = this.getDateRange();
        debugger;
    },

    /**
     * Initializes components listeners
     */
    onReportsAfterRender: function(){
        this.loadProjectsStore();
        this.loadUsersStore();
        this.loadGoupsStore();
    },

    /**
     * Loads the Projects store
     */
    loadProjectsStore: function(){
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback: function(){
            }
        });
    },

    /**
     * Loads the Users store
     */
    loadUsersStore: function(){
        var tmpUsersStore = Ext.getStore('Users');
        tmpUsersStore.load({
            callback: function(){
            }
        });
    },

    /**
     * Loads the Groups store
     */
    loadGoupsStore: function(){
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
    }

});