Ext.define('AliveTracker.view.projects.LogBookGridHeader', {

    extend: 'Ext.Container',
    xtype: 'logbookgridheader',
    config: {
        items: [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        name: 'project',
                        text: 'Project'
                    },
                    {
                        xtype: 'label',
                        name: 'activity',
                        text: 'activity'
                    },
                    {
                        xtype: 'label',
                        name: 'time',
                        text: 'Time'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'combobox',
                        name: 'project',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'activity',
                        allowBlank: false,
                        maxLength: 200
                    },
                    {
                        xtype: 'textfield',
                        name: 'time',
                        allowBlank: false,
                        maxLength: 200
                    },
                    {
                        xtype: 'button',
                        name: 'include',
                        text: '+'
                    }
                ]
            }
        ]
    }
})