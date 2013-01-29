Ext.define('AliveTracker.view.group.UsersGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'usersGrid',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Role'
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