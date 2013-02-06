Ext.Loader.setConfig({enabled:true});

Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux/');

Ext.application({

    name: 'AliveTracker',

    controllers: [
        'MainController',
        'home.HomeController',
        'group.GroupDetailController',
        'projects.AssignProjectsToUsersController',
        'projects.AssignUsersToProjectsController',
        'reports.ReportsController',
        'projects.LogBookController',
        'reports.ReportsController',
        'authentication.LoginController',
        'authentication.ForgotPasswordController',
        'authentication.ProfileController',
        'authentication.RegisterController'
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
