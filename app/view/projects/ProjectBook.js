Ext.define('AliveTracker.view.projects.ProjectBook', {

    extend: 'Ext.Container',
    xtype: 'projectbookform',
    requires : [
        'AliveTracker.view.projects.LogBook'
    ],
    config: {
        items: [
            {
                xtype: 'label',
                name: 'project',
                text: 'project1'
            },
            {
                xtype: 'container',
                layout: 'column',
                border: 5,
                style: {
                    borderColor: 'black',
                    borderStyle: 'solid'
                },
                items: [
                    {
                        xtype: 'logBookform'
                    }
                ]
            }
        ]
    }
})