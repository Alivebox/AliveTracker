Ext.define('AliveTracker.view.projects.AssignUsersToProjects', {
    extend: 'Ext.container.Container',
    xtype: 'assignuserstoprojectsform',
    requires : [
        'AliveTracker.view.utils.SingleColumnGrid',
        'AliveTracker.view.utils.SearchableList'
    ],
    config: {
        items:[
            {
                xtype: 'label',
                name: 'projectInfo',
                text: 'Project Name'
            },{
                xtype:'container',
                layout: 'column',
                items:[
                    ,{
                        xtype:'searchablelist',
                        filterConfig: {
                            fieldLabel: 'name'
                        },
                        listConfig: {
                            columnHeader: 'Available Users',
                            store: 'Users'
                        }
                    },{
                        xtype:'container',
                        layout: 'vbox',
                        items:[
                            {
                                xtype: 'button',
                                name: 'addAll',
                                text   : null,
                                icon: '/AliveTracker/resources/icons/addAll.png'
                            },{
                                xtype: 'button',
                                name: 'addOne',
                                text   : null,
                                icon: '/AliveTracker/resources/icons/add.png'
                            },{
                                xtype: 'button',
                                name: 'removeOne',
                                text   : null,
                                icon: '/AliveTracker/resources/icons/remove.png'
                            },{
                                xtype: 'button',
                                name: 'removeAll',
                                text   : null,
                                icon: '/AliveTracker/resources/icons/removeAll.png'
                            }
                        ]
                    },{
                        xtype: 'singlecolumngrid',
                        columnHeader: 'Assigned Users',
                        width: 125
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



