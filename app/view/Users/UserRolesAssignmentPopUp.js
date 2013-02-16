Ext.define('AliveTracker.view.users.UserRolesAssignmentPopUp', {

    extend:'Ext.window.Window',
    xtype:'userrolesassignmentpopup',
    title:'Users and Roles manager',
    resizable: false,
    height:300,
    width:500,
    requieres:[
        'AliveTracker.view.users.AssignUsersToProjects'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'assignuserstoprojectsview',
                projectName: this.projectName
            }
        ],
            this.callParent(arguments);
    }
});