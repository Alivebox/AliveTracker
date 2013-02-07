Ext.define('AliveTracker.view.projects.AssignProjectsToUsers', {
    extend:'Ext.container.Container',
    xtype:'assignprojectstousersform',
    requires:[
        'AliveTracker.view.utils.ItemSelector'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype:'label',
                name:'userInfo',
                text:'Juan Carlos Morales M. [jmorales@alivebox.com]'
            },
            {
                xtype:'combobox',
                name:'role',
                allowBlank:false,
                fieldLabel:'Role'
            },
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
        this.fireEvent('saveAction',this);
    },
    onCancelClick:function () {
        this.fireEvent('cancelAction',this);
    }
});



