Ext.define('AliveTracker.view.Main', {
    extend:'Ext.tab.Panel',
    xtype:'main',
    id: 'main',
    requires : [
        'AliveTracker.view.authentication.Login',
        'AliveTracker.view.authentication.ForgotPassword',
        'AliveTracker.view.authentication.Register',
        'AliveTracker.view.authentication.Profile',
        'AliveTracker.view.reports.Reports',
        'AliveTracker.view.group.GroupDetail',
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.projects.ProjectBook',
        'AliveTracker.view.projects.AssignProjectsToUsers',
        'AliveTracker.view.projects.AssignUsersToProjects',
        'AliveTracker.view.home.Home'
    ],

    initComponent: function(){
        this.items = [
            {
                xtype:'loginform',
                title:'Login'
            },
            {
                xtype: 'home',
                title: 'Home'
            },
            {
                xtype:'forgotpasswordform',
                title:'Forgot Password',
                itemId: 'forgotpasswordform'
            },
            {
                xtype:'registerform',
                title:'Register'
            },
            {
                xtype:'profileform',
                title:'Profile'
            },
            {
                xtype:'reportsform',
                title:'Reports'
            },
            {
                xtype:'groupdetailform',
                title:'Group Detail'
            },
            {
                xtype:'projectbookform',
                title:'Project book'
            },
            {
                xtype:'assignprojectstousersform',
                title:'Assign Projects'
            },
            {
                xtype:'assignuserstoprojectsform',
                title:'Assign Users'
            }
        ];
        this.callParent(arguments);
    }
});
