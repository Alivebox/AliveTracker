Ext.define('AliveTracker.view.group.UserRolesAssignmentPopUp', {

    extend:'Ext.window.Window',
    xtype:'userrolesassignmentpopup',
    title:'Users and Roles manager',
    height:300,
    width:550,
    requieres:[
        'AliveTracker.view.projects.AssignUsersToProjects'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'assignuserstoprojectsform'
            }
        ],
            this.callParent(arguments);
    }
});