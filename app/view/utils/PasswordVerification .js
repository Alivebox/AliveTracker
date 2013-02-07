Ext.define('AliveTracker.view.utils.PasswordVerification', {

    extend: 'Ext.Container',
    xtype: 'passwordverification',

    requires:[
        'Ext.form.*'
    ],

    initComponent:function () {
        debugger;
        var tmpPasswordVerification = Ext.create('Ext.container.Container', {
            defaults: {
                width: 300,
                inputType: 'password'
            },
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'Password',
                name: 'pass',
                itemId: 'pass',
                allowBlank: false,
                listeners: {
                    validitychange: function(field){
                        field.next().validate();
                    },
                    blur: function(field){
                        field.next().validate();
                    }
                }
            }, {
                fieldLabel: 'Confirm Password',
                name: 'pass-cfrm',
                vtype: 'password',
                initialPassField: 'pass' // id of the initial password field
            }]
        });

        this.items = [
            tmpPasswordVerification
        ];
        this.callParent(arguments);
    }
});