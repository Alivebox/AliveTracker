Ext.define('AliveTracker.view.group.ProjectsGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'projectGrid',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Name',
                    sortable : false,
                    dataIndex: 'name'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Users'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Created'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Buttons'
                }
            ]
        });

        me.callParent(arguments);
    }
})