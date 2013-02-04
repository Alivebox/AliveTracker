Ext.define('AliveTracker.view.reports.Reports', {
    extend: 'Ext.Container',
    xtype: 'reportsform',
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
                fieldLabel: 'Group',
                store: 'Groups',
                displayField: 'name'
            }, {
                xtype: 'combobox',
                name: 'project',
                allowBlank: false,
                fieldLabel: 'Project',
                store: 'Projects',
                displayField: 'name'
            }, {
                xtype: 'combobox',
                name: 'user',
                allowBlank: false,
                fieldLabel: 'User',
                store: 'Users',
                displayField: 'name'
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