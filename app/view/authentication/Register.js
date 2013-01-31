Ext.define('AliveTracker.view.authentication.Register', {
    extend: 'Ext.Container',
    xtype: 'registerForm',
    config: {
        items:[
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email',
                allowBlank: false,
                maxLength: 50,
                vtype: 'email'
            },{
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
                        xtype: 'checkboxfield',
                        boxLabel: 'Sign me up for newsletter',
                        name: 'newsletterSelected',
                        inputValue: '1'
                    },{
                        xtype: 'button',
                        name: 'registerNow',
                        text: 'Register Now'
                    }
                ]
            }
        ]
    }
})