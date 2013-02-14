Ext.define('AliveTracker.view.group.GroupDetail', {

    extend: 'Ext.Container',
    xtype: 'groupdetailform',
    requires : [
        'AliveTracker.view.group.UsersGrid',
        'AliveTracker.view.group.ProjectsGrid',
        'AliveTracker.view.users.AssignProjectsToUsers',
        'AliveTracker.view.users.AssignUsersToProjects',
        'AliveTracker.view.users.AssignUsersToGroups'
    ],
    groupData: null,
    initComponent: function(){
        this.groupTitleLabel = this.onCreateGroupTitleTextField();
        this.groupImage = this.onCreateGroupImage();
        this.items = [
            {
                xtype: 'container',
                layout: 'vbox',
                items: [
                    this.groupTitleLabel,
                    this.groupImage,
                ]
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

    /**
     * Fire a event to GroupDetailController
     * */
    onManageUsersClick: function(){
        this.fireEvent('manageUser');
    },

    /**
     * Fire a event to GroupDetailController
     * */
    onAddProjectClick: function(){
        this.fireEvent('addProject');
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
