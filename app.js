Ext.Loader.setConfig({enabled:true});

Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux/');

Ext.application({

    name: 'AliveTracker',

    requires: [
        'AliveTracker.defaults.Constants'
    ],

    controllers: [
        'MainController',
        'home.HomeController',
        'group.GroupDetailController',
        'group.AddUsersGroupController',
        'reports.ReportsController',
        'projects.LogBookController',
        'authentication.LoginController',
        'authentication.ForgotPasswordController',
        'authentication.ProfileController',
        'authentication.RegisterController',
        'users.AssignUsersToProjectsController'
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
