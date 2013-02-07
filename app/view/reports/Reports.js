Ext.define('AliveTracker.view.reports.Reports', {
    extend:'Ext.Container',
    xtype:'reportsform',
    layout:'anchor',
    requires:[
        'AliveTracker.view.utils.DateRange'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype:'label',
                name:'reports',
                text:'Reports'
            },
            {
                xtype:'combobox',
                id:'groupReports',
                name:'group',
                allowBlank:false,
                fieldLabel:'Group',
                store:'Groups',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                id:'projectReports',
                name:'project',
                allowBlank:false,
                fieldLabel:'Project',
                store:'Projects',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                id:'userReports',
                name:'user',
                allowBlank:false,
                fieldLabel:'User',
                store:'Users',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                id:'dateRangeComboReports',
                name:'dateRange',
                allowBlank:true,
                fieldLabel:'Date Range',
                editable:false
            },
            {
                xtype:'daterange',
                id:'dateRangeReports'
            },
            {
                xtype:'button',
                name:'export',
                text:'Export',
                listeners:{
                    scope:this,
                    click:this.onExportReportClick
                }

            }
        ];
        this.callParent(arguments);
    },
    onExportReportClick:function () {
        this.fireEvent('exportReport');
    }
});