Ext.define('AliveTracker.view.utils.SearchableList', {

    extend: 'Ext.Container',
    xtype: 'searchablelist',
    requires : [
        'AliveTracker.view.utils.SingleColumnGrid'
    ],
    layout: 'anchor',
    filterConfig: undefined,
    listConfig: undefined,

    initComponent: function(){
        var tmpLabel = this.createFilter();
        var tmpList = this.createList();
        this.items = [
            tmpLabel,
            tmpList
        ];
        this.callParent(arguments);
    },

    createFilter: function(){
        var tmpLabel = {
            xtype: 'textfield',
            name: 'filterText',
            fieldLabel: 'filter',
            maxLength: 20
        };
        Ext.apply(tmpLabel,this.filterConfig);
        return tmpLabel;
    },
    createList: function(){
        var tmpList = {
            xtype: 'singlecolumngrid'
        };
        Ext.apply(tmpList,this.listConfig);
        return tmpList;
    }
})