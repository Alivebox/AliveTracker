Ext.define('AliveTracker.view.utils.DateRange', {

    extend:'Ext.Container',
    xtype:'daterange',

    initComponent:function () {
        this.items = [
            {
                xtype:'datefield',
                fieldLabel:'Start Date',
                name:'startdt',
                itemId:'startdt',
                endDateField:'enddt',
                required:true,
                vtype:'daterange'
            },
            {
                xtype:'datefield',
                fieldLabel:'End Date',
                name:'enddt',
                itemId:'enddt',
                startDateField:'startdt',
                required:true,
                vtype:'daterange'
            }
        ];
        this.callParent(arguments);
    }
});