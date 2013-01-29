Ext.Loader.setConfig({enabled:true});

Ext.application({

    name: 'Memoranda',

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
