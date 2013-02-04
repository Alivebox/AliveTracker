Ext.define('AliveTracker.view.projects.AssignProjectsToUsers', {
    extend: 'Ext.container.Container',
    xtype: 'assignprojectstousersform',
    requires : [
        'AliveTracker.view.utils.SingleColumnGrid'
    ],
    initComponent: function(){
        this.items = [
            {
                xtype: 'label',
                name: 'userInfo',
                text: 'Juan Carlos Morales M. [jmorales@alivebox.com]'
            }, {
                xtype: 'combobox',
                name: 'role',
                allowBlank: false,
                fieldLabel: 'Role'
            },{
                xtype:'container',
                layout: 'column',
                items:[
                    {
                        xtype: 'singlecolumngrid',
                        columnHeader: 'Available Projects',
                        store: 'Projects',
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
                        xtype: 'singlecolumngrid',
                        columnHeader: 'Assigned Projects',
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
        ];
        this.callParent(arguments);
    }
})



