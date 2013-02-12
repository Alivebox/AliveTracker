Ext.define('AliveTracker.view.projects.LogBookGrid', {

    extend:'Ext.grid.Panel',
    xtype:'logbookgrid',

    initComponent:function () {
        var me = this;

        Ext.applyIf(me, {
            columns:[
                {
                    xtype:'gridcolumn',
                    menuDisabled:true,
                    text:'Group',
                    sortable:false,
                    dataIndex:'group'
                },
                {
                    xtype:'gridcolumn',
                    menuDisabled:true,
                    text:'Project',
                    sortable:false,
                    dataIndex:'project'
                },
                {
                    xtype:'gridcolumn',
                    menuDisabled:true,
                    text:'Activity',
                    sortable:false,
                    dataIndex:'txtActivity'
                },
                {
                    xtype:'gridcolumn',
                    menuDisabled:true,
                    text:'Time(h)',
                    sortable:false,
                    dataIndex:'time'
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    sortable:false,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            icon:'/AliveTracker/resources/icons/delete.png',
                            handler: function(grid, rowIndex, colIndex) {
                                grid.getStore().removeAt(rowIndex);

                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});