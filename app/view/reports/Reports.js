Ext.define('AliveTracker.view.reports.Reports', {
    extend:'Ext.Container',
    xtype:'reportsform',
    layout:'anchor',
    requires:[
        'Ext.form.*',
        'Ext.tip.QuickTipManager'
    ],
    initComponent:function () {
        //var dateRange = this.createDateRangeComponent();
        this.items = [
            //dateRange,
            {
                xtype:'label',
                name:'reports',
                text:'Reports'
            },
            {
                xtype:'combobox',
                name:'group',
                allowBlank:false,
                fieldLabel:'Group',
                store:'Groups',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                name:'project',
                allowBlank:false,
                fieldLabel:'Project',
                store:'Projects',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                name:'user',
                allowBlank:false,
                fieldLabel:'User',
                store:'Users',
                displayField:'name',
                editable:false
            },
            {
                xtype:'combobox',
                name:'dateRange',
                allowBlank:true,
                fieldLabel:'Date Range',
                editable:false
            },
            {
                xtype:'datefield',
                name:'fromDate',
                allowBlank:false
            },
            {
                xtype:'datefield',
                name:'toDate',
                allowBlank:false
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
    },
    createDateRangeComponent: function(){
        var dateRange = Ext.create('Ext.form.Panel', {
            renderTo: 'dr',
            frame: true,
            title: 'Date Range',
            bodyPadding: '5 5 0',
            width: 350,
            fieldDefaults: {
                labelWidth: 125,
                msgTarget: 'side',
                autoFitErrors: false
            },
            defaults: {
                width: 300
            },
            defaultType: 'datefield',
            items: [{
                fieldLabel: 'Start Date',
                name: 'startdt',
                itemId: 'startdt',
                vtype: 'daterange',
                endDateField: 'enddt'
            }, {
                fieldLabel: 'End Date',
                name: 'enddt',
                itemId: 'enddt',
                vtype: 'daterange',
                startDateField: 'startdt'
            }]
        });
        debugger;
        return dateRange;
    }
})