Ext.define('AliveTracker.view.projects.LogBookGridHeader', {

    extend: 'Ext.Container',
    xtype: 'logbookgridheader',
    layout: 'column',
    initComponent: function(){
        this.activityTextField = this.onCreateActivityTextField();
        this.timeTextField = this.onCreateTimeTextField();
        this.items = [
            this.activityTextField,
            this.timeTextField,
            {
                xtype: 'button',
                name: 'include',
                text: '+',
                listeners: {
                    scope: this,
                    click: "onAddNewActivity"
                }
            }
        ];
        this.callParent(arguments);
    },

    /**Create a textfield for activity*/
    onCreateActivityTextField: function(){
        var tmpActivityTextField = Ext.create('Ext.form.field.Text',{
            name:'txtActivity',
            fieldLabel: 'Activity',
            labelAlign: 'top',
            allowBlank:false,
            width: 500,
            maxLength:300
        });
        return tmpActivityTextField;
    },

    /**Create a textfield with numbers validation for time*/
    onCreateTimeTextField: function() {
        var tmpNumberTextField = Ext.create('Ext.form.NumberField',{
            width:50,
            allowNegative:false,
            fieldLabel: 'Time',
            labelAlign: 'top',
            value:1,
            name:'time',
            maxValue: 24,
            editable: false
        });
        return tmpNumberTextField;
    },

    /**Will send the email to the controller*/
    onAddNewActivity:function () {
        this.fireEvent('newActivity', this);
    }
});