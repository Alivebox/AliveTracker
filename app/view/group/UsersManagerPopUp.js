Ext.define('AliveTracker.view.group.UsersManagerPopUp', {

    extend:'Ext.window.Window',
    xtype:'usersmanagerpopup',
    title:'Users manager',
    height:300,
    width:550,
    requieres:[
        'AliveTracker.view.projects.AssignUsersToGroups'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'assignuserstogroupsform'
            }
        ],
        this.callParent(arguments);
    }
});