Ext.define('AliveTracker.view.authentication.Register', {
    extend:'Ext.Container',
    xtype:'registerform',
    initComponent:function () {
        this.items = [
            {
                xtype:'textfield',
                id:'emailRegister',
                name:'email',
                fieldLabel:'Email',
                allowBlank:false,
                maxLength:50,
                vtype:'email'
            },
            {
                xtype:'textfield',
                id:'passwordRegister',
                name:'password',
                fieldLabel:'Password',
                allowBlank:false,
                maxLength:20,
                inputType:'password'
            },
            {
                xtype:'container',
                layout:'column',
                items:[
                    {
                        xtype:'checkboxfield',
                        boxLabel:'Sign me up for newsletter',
                        id:'newsletterSelectedRegister',
                        name:'newsletterSelected',
                        inputValue:'1'
                    },
                    {
                        xtype:'button',
                        name:'registerNow',
                        text:'Register Now',
                        listeners:{
                            scope:this,
                            click:this.onRegisterActionClick
                        }

                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
    onRegisterActionClick:function () {
        this.fireEvent('registerAction');
    }
});