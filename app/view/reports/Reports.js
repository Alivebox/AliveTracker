Ext.define('AliveTracker.view.reports.Reports', {
    extend:'Ext.form.Panel',
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
                itemId:'groupReports',
                name:'group',
                allowBlank:false,
                fieldLabel:'Group',
                store:'Groups',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                itemId:'projectReports',
                name:'project',
                allowBlank:false,
                fieldLabel:'Project',
                store:'Projects',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                itemId:'userReports',
                name:'user',
                allowBlank:false,
                fieldLabel:'User',
                store:'Users',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                itemId:'dateRangeComboReports',
                name:'dateRange',
                allowBlank:true,
                fieldLabel:'Date Range',
                editable:false
            },
            {
                xtype: 'daterange',
                itemId: 'dateRangeReports'
            },
            {
                xtype:'button',
                name:'export',
                text:'Export',
                formBind: true,
                disabled: true,
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