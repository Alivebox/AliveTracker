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

        'AliveTracker.view.home.Home',
        'AliveTracker.view.projects.Calendar'
    ],

    initComponent: function(){
        this.items = [
//            {
//                xtype:'calendarview',
//                title: 'Prueba Calendario'
//            },
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
                title:'Log book'
            }

        ];
        this.callParent(arguments);
    }
});
