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
    init: function(){
        this.control({
            'reportsform': {
                afterrender: this.onReportsAfterRender,
                exportReport: this.onExportReport
            }
        });
    },
    onExportReport: function(){
        debugger;
    },
    onReportsAfterRender: function(){
        this.loadProjectsStore();
        this.loadUsersStore();
        this.loadGoupsStore();
    },

    loadProjectsStore: function(){
        var tmpProjectsStore = Ext.getStore('Projects');
        tmpProjectsStore.load({
            callback: function(){
            }
        });
    },
    loadUsersStore: function(){
        var tmpUsersStore = Ext.getStore('Users');
        tmpUsersStore.load({
            callback: function(){
            }
        });
    },
    loadGoupsStore: function(){
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
    }

});