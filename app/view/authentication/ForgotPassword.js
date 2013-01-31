Ext.define('AliveTracker.view.authentication.ForgotPassword', {
    extend: 'Ext.Container',
    xtype: 'forgotPasswordForm',
    config: {
        items: [
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email',
                allowBlank: false,
                maxLength: 50,
                vtype: 'email'
            },{
                xtype: 'button',
                name: 'resetInsructions',
                text: 'Send me reset instructions'
            }
        ]
    }
})