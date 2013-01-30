Ext.define('AliveTracker.view.Main', {
    extend:'Ext.tab.Panel',
    xtype:'main',
    requires : [
        'AliveTracker.view.authentication.Login',
        'AliveTracker.view.authentication.ForgotPassword',
        'AliveTracker.view.authentication.Register',
        'AliveTracker.view.authentication.Profile',
        'AliveTracker.view.reports.Reports',
        'AliveTracker.view.group.GroupDetail',
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.projects.ProjectBook'
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
            },
            {
                xtype:'groupdetailform',
                title:'Group Detail'
            },
            {
                xtype:'projectbookform',
                title:'Project book'
            }
        ]
    }
});
