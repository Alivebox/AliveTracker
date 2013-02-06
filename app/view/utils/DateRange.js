Ext.define('AliveTracker.view.utils.DateRange', {

    extend: 'Ext.Container',
    xtype: 'daterange',

    requires:[
        'Ext.form.*'
    ],

    initComponent:function () {
        var tmpDateRange = Ext.create('Ext.container.Container', {
            defaultType: 'datefield',
            items: [{
                fieldLabel: 'Start Date',
                name: 'startdt',
                itemId: 'startdt',
                endDateField: 'enddt',
                vtype: 'daterange'
            }, {
                fieldLabel: 'End Date',
                name: 'enddt',
                itemId: 'enddt',
                startDateField: 'startdt',
                vtype: 'daterange'
            }]
        });

        this.items = [
            tmpDateRange
        ];
        this.callParent(arguments);
    }
});