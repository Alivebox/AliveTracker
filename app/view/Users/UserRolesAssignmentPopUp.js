Ext.define('AliveTracker.view.users.UserRolesAssignmentPopUp', {

    extend:'Ext.window.Window',
    xtype:'userrolesassignmentpopup',
    title:'Users and Roles manager',
    height:550,
    width:350,
    requieres:[
        'AliveTracker.view.users.AssignUsersToProjects'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'assignuserstoprojectsform',
                projectName: this.projectName
            }
        ],
            this.callParent(arguments);
    }
});