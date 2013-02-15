/**
 * Created with JetBrains PhpStorm.
 * User: Andres
 * Date: 14/02/13
 * Time: 01:36 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('AliveTracker.view.group.AddUsersGroup', {

    extend: 'Ext.Container',
    xtype: 'addusersgroup',

    requires : [
        'AliveTracker.view.group.UsersGrid'
    ],

    initComponent: function() {
        var me = this;
        this.userscombo = this.getUsersCombo();
        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    this.userscombo,
                    {
                        xtype: 'button',
                        id: 'btnAddUser',
                        text: 'Add User'
                    }
                ]
            },
            {
                xtype: 'usersGrid',
                store: 'Users'
            }
        ];

        me.callParent(arguments);
    },

    getUsersCombo: function(){
        var tmpTypeahead = new Ext.form.ComboBox({
            triggerAction:'all',
            typeAhead:true,
            mode:'remote',
            minChars:2,
            forceSelection:true,
            hideTrigger:true,
            store: 'Users',
            valueField: 'name',
            displayField: 'name',
            enableKeyEvents: true,
            lastQuery: '',
            listeners: {
                scope: this,
                'keyup': 'onComboKeyUp',
                'beforequery': function(queryEvent) {
                    queryEvent.combo.onLoad();
                    // prevent doQuery from firing and clearing out my filter.
                    queryEvent.combo.expand();
                    return false;
                }
            }
        });

        return tmpTypeahead;
    },

    onComboKeyUp: function(){
        this.userscombo.getRawValue();
        this.fireEvent('comboUsersKeyUp', this.userscombo.getRawValue());

    }
});
