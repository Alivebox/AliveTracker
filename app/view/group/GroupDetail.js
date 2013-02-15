Ext.define('AliveTracker.view.group.GroupDetail', {

    extend: 'Ext.Container',
    xtype: 'groupdetailform',
    requires : [
        'AliveTracker.view.group.AddUsersGroup',
        'AliveTracker.view.group.ProjectsGrid',
        'AliveTracker.view.users.AssignProjectsToUsers',
        'AliveTracker.view.users.AssignUsersToProjects',
        'AliveTracker.view.projects.ProjectBook',
        'AliveTracker.view.users.AssignUsersToGroups'
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
                        xtype: 'projectGrid',
                        title:'Projects',
                        store: 'Projects'
                    },
                    {
                        xtype: 'addusersgroup',
                        title:'Users'
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
