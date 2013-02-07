Ext.define('AliveTracker.view.group.UsersGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'usersGrid',

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
                    text: 'Role',
                    sortable : false,
                    dataIndex: 'role'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Buttons'
                }
            ]
        });

        me.callParent(arguments);
    }
});