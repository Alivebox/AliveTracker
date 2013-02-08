Ext.define('AliveTracker.view.projects.AssignUsersToProjects', {
    extend:'Ext.container.Container',
    xtype:'assignuserstoprojectsform',
    requires:[
        'AliveTracker.view.utils.ItemSelector'
    ],

    initComponent:function () {
        this.items = [
            {
                xtype:'label',
                name:'projectInfo',
                text:'Project Name'
            },
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
        this.fireEvent('saveAction',this);
    },
    onCancelClick:function () {
        this.fireEvent('cancelAction',this);
    }
});



