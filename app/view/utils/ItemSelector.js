Ext.define('AliveTracker.view.utils.ItemSelector', {

    extend: 'Ext.Container',
    xtype: 'itemselector',
    dataStore: undefined,
    fieldLable: undefined,
    displayField: undefined,
    valueField: undefined,
    buttons: undefined,

    requires:[
        'Ext.ux.form.MultiSelect',
        'Ext.ux.form.ItemSelector'
    ],

    initComponent:function () {
        var tmpItemSelector = Ext.create('Ext.ux.form.ItemSelector',{
            name:'itemselector',
            width: 500,
            anchor:'100%',
            fieldLabel: this.fieldLable,
            imagePath:'extjs/examples/ux/css/images/',
            store: this.dataStore,
            displayField: this.displayField,
            valueField: this.valueField,
            msgTarget:'side',
            buttons: this.buttons
        });

        this.items = [
            tmpItemSelector
        ];

        this.callParent(arguments);
    }
})