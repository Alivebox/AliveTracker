Ext.define('AliveTracker.view.authentication.Profile', {

    extend:'Ext.Container',
    xtype:'profileform',

    initComponent:function () {
        this.items = [
            {
                xtype:'container',
                layout:'column',
                items:[
                    {
                        xtype:'image',
                        name:'image',
                        src:'/AliveTracker/resources/icons/user.png'
                    },
                    {
                        xtype:'container',
                        items:[
                            {
                                xtype:'textfield',
                                name:'email',
                                fieldLabel:'Email',
                                allowBlank:false,
                                maxLength:50,
                                vtype:'email'
                            },
                            {
                                xtype:'textfield',
                                name:'name',
                                fieldLabel:'Name',
                                allowBlank:false,
                                maxLength:50
                            },
                            {
                                xtype:'textfield',
                                name:'password',
                                fieldLabel:'Password',
                                allowBlank:false,
                                maxLength:20,
                                minLength:8,
                                inputType:'password'

                            },
                            {
                                xtype:'textfield',
                                name:'confirmPassword',
                                fieldLabel:'Confirm Password',
                                allowBlank:false,
                                maxLength:20,
                                minLength:8,
                                inputType:'password'

                            }
                        ]
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
        this.fireEvent('saveAction');
    },
    onCancelClick:function () {
        this.fireEvent('cancelAction');
    }
})