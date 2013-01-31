Ext.define('AliveTracker.view.projects.AssignUsersToProjects', {
    extend: 'Ext.container.Container',
    xtype: 'assignUsersToProjectsForm',
    requires : [
        'AliveTracker.view.utils.SingleColumnGrid'
    ],
    config: {
        items:[
            {
                xtype: 'label',
                name: 'projectInfo',
                text: 'Project Name'
            }, {
                xtype: 'textfield',
                name: 'userNameFilter',
                fieldLabel: 'name',
                maxLength: 20
            },{
                xtype:'container',
                layout: 'column',
                items:[
                    {
                        xtype: 'singleColumnGrid',
                        title: 'Available Users',
                        width: 125
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
                        xtype: 'singleColumnGrid',
                        title: 'Assigned Users',
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



