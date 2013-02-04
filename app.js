Ext.Loader.setConfig({enabled:true});

Ext.Loader.setPath('Ext.ux.DataView', 'extjs/examples/ux/DataView');

Ext.application({

    name: 'AliveTracker',

    controllers: [
        'MainController',
        'home.HomeController',
        'group.GroupDetailController'
    ],

    launch: function(){
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'main'
                }
            ]
        });
    }
});
