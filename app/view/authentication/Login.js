Ext.define('AliveTracker.view.authentication.Login', {
    extend:'Ext.Container',
    xtype:'loginform',
    initComponent:function () {
        this.items = [
            {
                xtype:'textfield',
                name:'userName',
                fieldLabel:'Username',
                allowBlank:false,
                maxLength:20
            },
            {
                xtype:'textfield',
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
                        xtype:'button',
                        name:'login',
                        text:'Login',
                        listeners:{
                            scope:this,
                            click:this.onLoginClick
                        }
                    },
                    {
                        xtype:'container',
                        layout:'vbox',
                        items:[
                            {
                                xtype:'button',
                                name:'signUp',
                                text:'Sign-Up',
                                listeners:{
                                    scope:this,
                                    click:this.onSignUpClick
                                }
                            },
                            {
                                xtype:'button',
                                name:'forgotPassword',
                                text:'forgot password',
                                listeners:{
                                    scope:this,
                                    click:this.onForgotPasswordClick
                                }

                            }
                        ]
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
    onForgotPasswordClick:function () {
        this.fireEvent('navigateToForgotPasswordView');
    },
    onLoginClick:function () {
        this.fireEvent('loginAction');
    },
    onSignUpClick:function () {
        this.fireEvent('signUpAction');
    }
});