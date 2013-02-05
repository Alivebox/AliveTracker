Ext.define('AliveTracker.view.group.AddProjectPopUp', {

    extend:'Ext.window.Window',
    xtype:'addprojectpopup',
    title:'Add Project',
    height:90,
    width:300,
    initComponent:function () {
        this.projectTextField = this.createProjectNameTextField();
        this.items = [
            this.projectTextField,
            {
                xtype:'button',
                name:'addProject',
                text:'Add Project',
                listeners:{
                    scope:this,
                    click:"addProjectClick"
                }
            }
        ],
        this.callParent(arguments);
    },

    createProjectNameTextField: function(){
        var tmpProjectNameTextField = Ext.create('Ext.form.field.Text',{
            name:'projectName',
            fieldLabel:'Name:',
            allowBlank:false,
            maxLength:100
        });
        return tmpProjectNameTextField;
    },

    /**Will send the email to the controller*/
    addProjectClick:function () {
        if(Ext.isEmpty(this.projectTextField.value)){
            return;
        }
        this.fireEvent('addProjectClick', this);
    }
});