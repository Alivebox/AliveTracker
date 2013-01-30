Ext.define('AliveTracker.view.group.GroupDetail', {

    extend: 'Ext.Container',
    xtype: 'groupdetailform',
    requires : [
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.group.ProjectsGrid'
    ],
    config: {
        items: [
            {
                xtype: 'label',
                name: 'groupName',
                text: 'Group Name (detail)'
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        name: 'users',
                        text: 'Users'
                    },
                    {
                        xtype: 'button',
                        name: 'btnInvite',
                        text: 'Invite Users'
                    }
                ]
            },
            {
                xtype: 'usersGrid'
            },
            {
                xtype: 'label',
                name: 'projects',
                text: 'Projects'
            },
            {
                xtype: 'projectGrid'
            }
        ]
    }
})