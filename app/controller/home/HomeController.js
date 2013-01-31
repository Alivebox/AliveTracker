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
        this.loadHomeStore();
    },

    loadHomeStore: function(){
        var tmpGroupsStore = Ext.getStore('Groups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
        var tmpGroupsStore = Ext.getStore('BelongGroups');
        tmpGroupsStore.load({
            callback: function(){
            }
        });
    }

});