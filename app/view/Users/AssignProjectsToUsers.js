Ext.define('AliveTracker.view.users.AssignProjectsToUsers', {
    extend:'Ext.container.Container',
    xtype:'assignprojectstousersform',
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
                        itemId:'itemselectorProjects',
                        store:'Projects',
                        fieldLable:'Select Projects',
                        displayField:'name',
                        valueField:'id',
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
        this.fireEvent('saveProjectsToUsersAction',this,this.ownerCt);
    },
    onCancelClick:function () {
        this.fireEvent('cancelProjectsToUsersAction',this.ownerCt);
    }
});



