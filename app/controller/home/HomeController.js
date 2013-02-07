Ext.define("AliveTracker.controller.home.HomeController", {

    extend:"Ext.app.Controller",

    models:[
        'Group',
        'BelongGroup'
    ],

    stores:[
        'Groups',
        'BelongGroups'
    ],

    init:function () {
        this.control({
            'home': {
                afterrender: this.onHomeAfterRender
            }
        });
    },

    onHomeAfterRender: function(){
    },

    loadHomeStore: function(){
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
        var tmpBelongGroupsStore = Ext.getStore('BelongGroups');
        tmpBelongGroupsStore.load({
            callback: function(){
            }
        });
    }

});