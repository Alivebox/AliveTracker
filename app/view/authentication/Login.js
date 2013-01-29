Ext.define('AliveTracker.view.authentication.Login', {
    extend: 'Ext.Container',
    xtype: 'loginForm',
    layout: 'anchor',
    config: {
        items: [
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
            }, {
                xtype: 'button',
                name: 'login',
                text: 'Login'
            }, {
                xtype: 'button',
                name: 'signUp',
                text: 'Sign-Up'
            }, {
                xtype: 'label',
                name: 'forgotPassword',
                text: 'forgot password'
            }
        ]
    }
})