Ext.define('AliveTracker.view.projects.LogBookGridHeader', {

    extend: 'Ext.Container',
    xtype: 'logbookgridheader',
    initComponent: function(){
        this.activityTextField = this.onCreateActivityTextField();
        this.timeTextField = this.onCreateTimeTextField();
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        name: 'activity',
                        text: 'activity'
                    },
                    {
                        xtype: 'label',
                        name: 'time',
                        text: 'Time'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
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
                ]
            }
        ];
        this.callParent(arguments);
    },

    /**Create a textfield for activity*/
    onCreateActivityTextField: function(){
        var tmpActivityTextField = Ext.create('Ext.form.field.Text',{
            name:'txtActivity',
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
})