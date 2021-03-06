Ext.define('AliveTracker.view.projects.LogBookGridHeader', {

    extend: 'Ext.Container',
    xtype: 'logbookgridheader',
    layout: 'column',

    initComponent: function(){
        this.activityTextField = this.onCreateActivityTextField();
        this.timeTextField = this.onCreateTimeTextField();
        this.projectComboBox = this.onCreateProjectComboBox();
        this.items = [
            this.projectComboBox,
            this.activityTextField,
            this.timeTextField
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
            allowBlank:false,
            fieldLabel: 'Time',
            labelAlign: 'top',
            value:1,
            name:'time',
            maxValue: 24,
            minValue: 1,
            editable: false
        });
        return tmpNumberTextField;
    },

    /**
     * Creates a comboBox which hold project store
     */
    onCreateProjectComboBox: function(){
        var tmpProjectComboBox = Ext.create('Ext.form.ComboBox', {
            name: 'project',
            allowBlank: false,
            fieldLabel: 'Project',
            labelAlign: 'top',
            store: 'Projects',
            displayField: 'name',
            editable: false
        });
        return tmpProjectComboBox;
    }
});