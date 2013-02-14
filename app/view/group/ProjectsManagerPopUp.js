Ext.define('AliveTracker.view.group.ProjectsManagerPopUp', {

    extend:'Ext.window.Window',
    xtype:'projectsmanagerpopup',
    title:'Users manager',
    height:300,
    width:550,
    requieres:[
        'AliveTracker.view.users.AssignProjectsToUsers'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'assignprojectstousersform'
            }
        ],
            this.callParent(arguments);
    }
});