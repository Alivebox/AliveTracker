Ext.define('Memoranda.view.Main', {
    extend:'Ext.tab.Panel',
    xtype:'main',
    requires : [
        'Memoranda.view.authentication.Login',
        'Memoranda.view.authentication.ForgotPassword',
        'Memoranda.view.authentication.Register',
        'Memoranda.view.authentication.Profile',
        'Memoranda.view.reports.Reports'
    ],

    config:{
        items:[
            {
                xtype:'loginForm',
                title:'Login'
            },
            {
                xtype:'forgotPasswordForm',
                title:'Forgot Password'
            },
            {
                xtype:'registerForm',
                title:'Register'
            },
            {
                xtype:'profileForm',
                title:'Profile'
            },
            {
                xtype:'reportsForm',
                title:'Reports'
            }
        ]
    }
});
