Ext.define('AliveTracker.view.group.InviteUserPopUp', {

    extend:'Ext.window.Window',
    xtype:'inviteuserpopup',
    title:'Invite Users',
    height:90,
    width:300,
    initComponent:function () {
        this.emailTextField = this.createProjectNameTextField();
        this.items = [
            this.emailTextField,
            {
                xtype:'button',
                name:'signUp',
                text:'Sign-Up',
                listeners:{
                    scope:this,
                    click:"inviteUserClick"
                }
            }
        ],
        this.callParent(arguments);
    },

    /**Create a textfield for email*/
    createProjectNameTextField: function(){
        var tmpEmailTextField = Ext.create('Ext.form.field.Text',{
            name:'email',
            fieldLabel:'Email(s):',
            allowBlank:false,
            maxLength:100,
            vtype: 'email'
        });
        return tmpEmailTextField;
    },

    /**Will send the email to the controller*/
    inviteUserClick:function () {
        if(Ext.isEmpty(this.emailTextField.value)){
            return;
        }
        this.fireEvent('inviteUser', this);
    }
});