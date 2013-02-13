Ext.define('AliveTracker.view.projects.AssignUsersToGroups', {
    extend:'Ext.container.Container',
    xtype:'assignuserstogroupsform',
    requires:[
        'AliveTracker.view.utils.ItemSelector'
    ],

    initComponent:function () {
        this.items = [
            {
                xtype:'container',
                items:[
                    {
                        xtype:'itemselector',
                        itemId:'itemselectorUsers',
                        store:'Users',
                        fieldLable:'Select Users',
                        displayField:'name',
                        valueField:'name',
                        buttons:['add', 'remove']
                    }
                ]
            },
            {
                xtype:'container',
                layout:'column',
                items:[
                    {
                        xtype:'button',
                        name:'save',
                        text:'Save',
                        listeners:{
                            scope:this,
                            click:this.onSaveClick
                        }

                    },
                    {
                        xtype:'button',
                        name:'cancel',
                        text:'Cancel',
                        listeners:{
                            scope:this,
                            click:this.onCancelClick
                        }
                    }

                ]
            }
        ];
        this.callParent(arguments);
    },
    onSaveClick:function () {
        this.fireEvent('saveUsersAction', this ,this.ownerCt);
    },
    onCancelClick:function () {
        this.fireEvent('cancelUsersAction',this.ownerCt);
    }
});



