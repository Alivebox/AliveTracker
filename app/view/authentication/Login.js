Ext.define('AliveTracker.view.authentication.Login', {
    extend: 'Ext.Container',
    xtype: 'loginForm',
    config: {
        items:[
            {
                xtype: 'textfield',
                name: 'userName',
                fieldLabel: 'Username',
                allowBlank: false,
                maxLength: 20
            }, {
                xtype: 'textfield',
                name: 'password',
                fieldLabel: 'Password',
                allowBlank: false,
                maxLength: 20,
                inputType: 'password'
            },{
                xtype:'container',
                layout: 'column',
                items:[
                    {
                        xtype: 'button',
                        name: 'login',
                        text: 'Login'
                    },{
                        xtype:'container',
                        layout: 'vbox',
                        items:[
                            {
                                xtype: 'button',
                                name: 'signUp',
                                text: 'Sign-Up'
                            },{
                                xtype: 'label',
                                name: 'forgotPassword',
                                text: 'forgot password'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})