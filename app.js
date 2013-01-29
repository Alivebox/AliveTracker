Ext.Loader.setConfig({enabled:true});

Ext.application({

    name: 'AliveTracker',

    controllers: [
        'MainController'
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
