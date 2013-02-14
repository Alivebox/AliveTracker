Ext.define('AliveTracker.view.group.GroupDetail', {

    extend: 'Ext.Container',
    xtype: 'groupdetailform',
    requires : [
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.users.AssignProjectsToUsers',
        'AliveTracker.view.projects.ProjectBook',
        'AliveTracker.view.users.AssignUsersToGroups',
        'AliveTracker.view.group.GroupProjects'
    ],
    groupData: null,
    initComponent: function(){
        this.groupTitleLabel = this.onCreateGroupTitleTextField();
        this.groupImage = this.onCreateGroupImage();
        this.items = [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        xtype:'projectbookform',
                        title:'Log book'
                    },
                    {
                        xtype: 'groupprojects',
                        title:'Projects'
                    },
                    {
                        xtype: 'usersGrid',
                        title:'Users',
                        store: 'Users'
                    }
                ]

            }
        ];
        this.callParent(arguments);
    },

    /**
     * Fire a event to GroupDetailController
     * */
    onManageUsersClick: function(){
        this.fireEvent('manageUser');
    },

    /**
     * Create a groupTitle label
     * */
    onCreateGroupTitleTextField: function(){
        var tmpGroupTitleTextField = Ext.create('Ext.form.Label',{
            name:'groupNameLabelField',
            text: ''
        });
        return tmpGroupTitleTextField;
    },

    /**
     * Create Ext.Img component
     * */
    onCreateGroupImage: function(){
        var tmpImage = Ext.create('Ext.Img', {
            renderTo: Ext.getBody()
        });
        return tmpImage;
    }
 });
