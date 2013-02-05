Ext.define('AliveTracker.view.projects.AssignUsersToProjects', {
    extend: 'Ext.container.Container',
    xtype: 'assignuserstoprojectsform',
    requires : [
        'AliveTracker.view.utils.ItemSelector'
    ],
    config: {
        items:[
            {
                xtype: 'label',
                name: 'projectInfo',
                text: 'Project Name'
            },{
                xtype:'container',
                items:[
                    {
                        xtype: 'itemselector',
                        availableItemsListConfig:{
                            columnHeader: 'Available Users',
                            store: 'Users'
                        },
                        assignedItemsListConfig:{
                            columnHeader: 'Assigned Users',
                            store: 'Users'
                        }
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        name: 'save',
                        text: 'Save'

                    }, {
                        xtype: 'button',
                        name: 'cancel',
                        text: 'Cancel'
                    }

                ]
            }
        ]
    }
})



