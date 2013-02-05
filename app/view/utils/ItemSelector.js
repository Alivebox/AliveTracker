Ext.define('AliveTracker.view.utils.ItemSelector', {

    extend: 'Ext.Container',
    xtype: 'itemselector',
    requires : [
        'AliveTracker.view.utils.SingleColumnGrid'
    ],
    layout: 'column',
    availableItemsListConfig: undefined,
    assignedItemsListConfig: undefined,
    buttonsContainerConfig: undefined,

    initComponent: function(){
        var tmpAvailableList = this.createAvailableList();
        var tmpButtonsContaner = this.createButtonsContainer();
        var tmpAssignedList = this.createAssignedList();
        this.items = [
            tmpAvailableList,
            tmpButtonsContaner,
            tmpAssignedList

        ];
        this.callParent(arguments);
    },


    createAvailableList: function(){
        var tmpAvailableList = {
            xtype: 'singlecolumngrid',
            id: 'availableList',
            width: 125
        };
        Ext.apply(tmpAvailableList,this.availableItemsListConfig);
        return tmpAvailableList;
    },

    createAssignedList: function(){
        var tmpAssignedList = {
            xtype: 'singlecolumngrid',
            id: 'assignedList',
            width: 125
        };
        Ext.apply(tmpAssignedList,this.assignedItemsListConfig);
        return tmpAssignedList;
    },

    createButtonsContainer: function(){
        var tmpButtonsContainer = {
            xtype:'container',
            id: 'buttonsContainer',
            layout: 'vbox',
            items:[
                {
                    xtype: 'button',
                    id: 'addAll',
                    text   : null,
                    icon: '/AliveTracker/resources/icons/addAll.png',
                    listeners:{
                        scope:this,
                        click:"addAllClick"
                    }
                },{
                    xtype: 'button',
                    id: 'addOne',
                    text   : null,
                    icon: '/AliveTracker/resources/icons/add.png',
                    listeners:{
                        scope:this,
                        click:"addOneClick"
                    }
                },{
                    xtype: 'button',
                    id: 'removeOne',
                    text   : null,
                    icon: '/AliveTracker/resources/icons/remove.png',
                    listeners:{
                        scope:this,
                        click:"removeOneClick"
                    }
                },{
                    xtype: 'button',
                    id: 'removeAll',
                    text   : null,
                    icon: '/AliveTracker/resources/icons/removeAll.png',
                    listeners:{
                        scope:this,
                        click:"removeAllClick"
                    }
                }
            ]
        };
        Ext.apply(tmpButtonsContainer,this.buttonsContainerConfig);
        return tmpButtonsContainer;
    },
    addAllClick:function () {
        this.fireEvent('addAllItems', this.items);
    },
    addOneClick:function () {
        this.fireEvent('addOneItem', this.items);
    },
    removeOneClick:function () {
        this.fireEvent('removeOneItem', this.items);
    },
    removeAllClick:function () {
        this.fireEvent('removeAllItems', this.items);
    }
})