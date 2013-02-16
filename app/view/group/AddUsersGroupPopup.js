/**
 * Created with JetBrains PhpStorm.
 * User: Andres
 * Date: 14/02/13
 * Time: 01:44 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AliveTracker.view.group.AddUsersGroupPopUp', {

    extend:'Ext.window.Window',
    xtype:'addusersgrouppopup',
    title:'Add User',
    height:400,
    width:400,
    renderTo: Ext.getBody(),
    //html: 'Add new user',

    requires : [
        'AliveTracker.view.group.UserRolesGrid'
    ],

    initComponent:function () {
        this.tmpComboUsers = this.getUsersCombo();

        this.items = [

            this.tmpComboUsers,
            {
                xtype: 'userrolesgrid',
                store: 'Users'
            }
        ]
        this.callParent(arguments);
    },

    /**
     * Fires an event to be caught by the controller
     * */
    onSubmitAction: function(){
        this.fireEvent('onSaveAction', this);
    },

    onCreateSubmitButton: function(){
        var tmpSubmitButton = Ext.create('Ext.Button',{
            name: 'submitButton',
            text: 'Insert',
            formBind: true,
            disabled: true,
            listeners: {
                scope:this,
                click:'onSubmitAction'
            }
        });
        return tmpSubmitButton;
    },

    /**
     * Send a event to the controller to close windows
     * */
    onCloseWindows: function(){
        this.fireEvent('onCloseWindows', this);
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
        this.tmpComboUsers.getRawValue();
        this.fireEvent('comboUsersKeyUp', this.tmpComboUsers.getRawValue());

    }
});