Ext.define('AliveTracker.view.group.UsersGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'usersGrid',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    menuDisabled:true,
                    text: 'Name',
                    sortable : false,
                    dataIndex: 'name'
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    text: 'Delete',
                    sortable:false,
                    align : 'center',
                    items:[
                        {
                            icon:AliveTracker.default.Constants.REMOVE_GRID_ROW_BUTTON,
                            tooltip: AliveTracker.default.Constants.GROUP_DETAIL_REMOVE_USER,
                            handler: function(grid, rowIndex, colIndex) {
                                Ext.MessageBox.confirm(
                                    'Confirm',
                                    Ext.util.Format.format(AliveTracker.default.Constants.GRID_DELETE_ROW_CONFIRMATION_MESSAGE),
                                    function(argButton){
                                        if(argButton == 'yes')
                                        {
                                            grid.getStore().removeAt(rowIndex);
                                        }
                                    },
                                    this
                                );
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});