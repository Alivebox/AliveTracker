Ext.define('AliveTracker.view.group.GroupDetail', {

    extend: 'Ext.Container',
    xtype: 'groupdetailform',
    requires : [
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.group.ProjectsGrid'
    ],

    initComponent: function(){
        this.items = [
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
                        name: 'lblUsers',
                        text: 'Users'
                    },
                    {
                        xtype: 'button',
                        name: 'btnUsersManager',
                        text: 'Select Users',
                        listeners: {
                            scope: this,
                            click: this.onManageUsersClick
                        }
                    }
                ]
            },
            {
                xtype: 'usersGrid',
                store: 'Users'
            },
            {
               xtype: 'container',
               layout: 'column',
               items: [
                   {
                       xtype: 'label',
                       name: 'lblUsers',
                       text: 'Projects'
                   },
                   {
                       xtype: 'button',
                       name: 'btnAddProject',
                       text: 'Add Project',
                       listeners: {
                           scope: this,
                           click: this.onAddProjectClick
                       }
                   }
               ]
            },
            {
                xtype: 'projectGrid',
                store: 'Projects'
            }
        ];
        this.callParent(arguments);
    },

    /**Fire a event to GroupDetailController*/
    onManageUsersClick: function(){
        this.fireEvent('manageUser');
    },

    /**Fire a event to GroupDetailController*/
    onAddProjectClick: function(){
        this.fireEvent('addProject');
    }

});