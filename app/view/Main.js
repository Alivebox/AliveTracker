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
        'AliveTracker.view.projects.ProjectBook',
        'AliveTracker.view.projects.AssignProjectsToUsers',
        'AliveTracker.view.projects.AssignUsersToProjects',
        'AliveTracker.view.home.Home'
    ],

    config:{
        items:[
            {
                xtype:'loginForm',
                title:'Login'
            },
            {
                xtype: 'home',
                title: 'Home'
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
            },{
                xtype:'assignProjectsToUsersForm',
                title:'Assign Projects'
            },{
                xtype:'assignUsersToProjectsForm',
                title:'Assign Users'
            }
        ]
    }
});
