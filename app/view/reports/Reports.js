Ext.define('Memoranda.view.reports.Reports', {
    extend: 'Ext.Container',
    xtype: 'reportsForm',
    layout: 'anchor',
    config: {
        items: [
            {
                xtype: 'label',
                name: 'reports',
                text: 'Reports'
            }, {
                xtype: 'combobox',
                name: 'group',
                allowBlank: false,
                fieldLabel: 'Group'
            }, {
                xtype: 'combobox',
                name: 'project',
                allowBlank: false,
                fieldLabel: 'Project'
            }, {
                xtype: 'combobox',
                name: 'user',
                allowBlank: false,
                fieldLabel: 'User'
            }, {
                xtype: 'combobox',
                name: 'dateRange',
                allowBlank: false,
                fieldLabel: 'Date Range'
            },{
                xtype: 'datefield',
                name: 'fromDate',
                allowBlank: false
            }, {
                xtype: 'datefield',
                name: 'toDate',
                allowBlank: false
            }, {
                xtype: 'button',
                name: 'export',
                text: 'Export'
            }
        ]
    }
})