Ext.define('AliveTracker.view.projects.AssignProjectsToUsers', {
    extend: 'Ext.container.Container',
    xtype: 'assignprojectstousersform',
    requires : [
        'AliveTracker.view.utils.ItemSelector'
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
                items:[
                    {
                        xtype: 'itemselector',
                        availableItemsListConfig:{
                            columnHeader: 'Available Projects',
                            store: 'Projects'
                        },
                        assignedItemsListConfig:{
                            columnHeader: 'Assigned Projects'
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
        ];
        this.callParent(arguments);
    }
})



