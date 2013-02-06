Ext.define('AliveTracker.view.projects.LogBookGrid', {

    extend: 'Ext.Container',
    xtype: 'logbookgrid',
    layout: 'anchor',
    items: [
        {
            xtype: 'grid',
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Group'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Project'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Activity'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Time(h)'
                }
            ]
        },
        {
            xtype: 'label',
            name: 'total',
            text: 'Total'
        },
        {
            xtype: 'label',
            name: 'hours',
            text: '16h'
        }
    ]

});