Ext.define('AliveTracker.view.users.UsersList', {

    extend:'Ext.grid.Panel',
    xtype:'userslist',

    initComponent:function () {
        var me = this;

        Ext.applyIf(me, {
            columns:[
                {
                    xtype:'gridcolumn',
                    menuDisabled:true,
                    text:'Name',
                    sortable:false,
                    dataIndex:'name'
                }
            ]
        });

        me.callParent(arguments);
    }
});