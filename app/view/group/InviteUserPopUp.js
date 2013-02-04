Ext.define('AliveTracker.view.group.InviteUserPopUp', {

    extend:'Ext.window.Window',
    xtype:'inviteuserpopup',
    title:'Invite Users',
    height:90,
    width:300,
    initComponent:function () {
        this.projectTextField = this.createProjectNameTextField();
        this.items = [
            this.projectTextField,
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

    createProjectNameTextField: function(){
        var tmpEmailTextField = Ext.create('Ext.form.field.Text',{
            name:'email',
            fieldLabel:'Email(s):',
            allowBlank:false,
            maxLength:100
        });
        return tmpEmailTextField;
    },

    /**Will send the email to the controller*/
    inviteUserClick:function () {
        this.fireEvent('inviteUser', this);
    }
});