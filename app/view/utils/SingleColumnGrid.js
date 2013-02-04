Ext.define('AliveTracker.view.utils.SingleColumnGrid', {

    extend: 'Ext.grid.Panel',
    xtype:"singlecolumngrid",
    columnHeader: undefined,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: this.columnHeader,
                    sortable : false,
                    dataIndex: 'name'
                }
            ]
        });

        me.callParent(arguments);
    }
})
