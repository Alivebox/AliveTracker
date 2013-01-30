Ext.define('AliveTracker.view.projects.LogBook', {

    extend: 'Ext.Container',
    xtype: 'logBookform',
    requires : [
        'AliveTracker.view.projects.LogBookGridHeader',
        'AliveTracker.view.projects.LogBookGrid'
    ],
    config: {
        items: [
            {
                xtype: 'label',
                name: 'logBook',
                text: 'Log Book'
            },
            {
                xtype: 'container',
                layout: 'anchor',
                items: [
                    {
                        xtype: 'datefield',
                        name: 'toDate',
                        allowBlank: false,
                        text: 'Date'
                    },
                    {
                        xtype: 'combobox',
                        name: 'group',
                        allowBlank: false,
                        fieldLabel: 'Group'
                    },
                    {
                        xtype: 'combobox',
                        name: 'project',
                        allowBlank: false,
                        fieldLabel: 'Project'
                    }
                ]
            },
            {
                xtype: 'logbookgridheader'
            },
            {
                xtype: 'logbookgrid'
            }
        ]
    }
})