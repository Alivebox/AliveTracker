Ext.define('AliveTracker.view.projects.LogBook', {

    extend: 'Ext.form.Panel',
    xtype: 'logBookform',
    requires : [
        'AliveTracker.view.projects.LogBookGridHeader',
        'AliveTracker.view.projects.LogBookGrid',
        'AliveTracker.view.utils.DatePickerField'
    ],
    models:[
        'Group',
        'Project'
    ],

    stores:[
        'Groups',
        'Projects'
    ],
    initComponent:function () {
        this.groupComboBox = this.onCreateGroupComboBox();
        this.projectComboBox = this.onCreateProjectComboBox();
        this.items = [
            {
                xtype: 'label',
                name: 'logBook',
                text: 'Log Book'
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'datepickerfield',
                        name: 'datepicker',
                        itemId: 'datepickerLogBook',
                        allowBlank: false,
                        listeners:{
                            scope: this,
                            select: this.onDateSelectedAction
                        }
                    },
                    {
                        xtype: 'container',
                        layout: 'anchor',
                        items: [
                            this.groupComboBox,
                            this.projectComboBox
                        ]
                    }

                ]
            },{
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'logbookgridheader'
                    },
                    {
                        xtype: 'button',
                        name: 'include',
                        text: null,
                        icon: 'resources/icons/add.png',
                        formBind: true,
                        listeners: {
                            scope: this,
                            click: this.onAddNewActivity
                        }
                    }
                ]
            }            ,
            {
                xtype: 'logbookgrid',
                itemId: 'logbookgrid',
                store: 'LogBook'
            },
            {
                xtype: 'label',
                name: 'total',
                text: 'Total'
            },
            {
                xtype: 'label',
                name: 'hours',
                text: '16h'
            }
        ];
            this.callParent(arguments);
    },

    /**
     * Fires the newActivity event on the controller
     */
    onAddNewActivity:function () {
        this.fireEvent('newActivity', this.getComponent('logbookgrid'));
    },

    /**
     * Fires the datePickerChanged event on the controller
     */
    onDateSelectedAction: function()
    {
        this.fireEvent('datePickerChanged', this.getComponent(1).getComponent('datepickerLogBook'));
    },

    /**
     * Creates a comboBox which hold group store
     */
    onCreateGroupComboBox: function(){
        var tmpGroupComboBox = Ext.create('Ext.form.ComboBox', {
            name: 'group',
            allowBlank: false,
            fieldLabel: 'Group',
            store: 'Groups',
            displayField: 'name',
            editable: false
        });
        return tmpGroupComboBox;
    },

    /**
     * Creates a comboBox which hold project store
     */
    onCreateProjectComboBox: function(){
        var tmpProjectComboBox = Ext.create('Ext.form.ComboBox', {
            name: 'project',
            allowBlank: false,
            fieldLabel: 'Project',
            store: 'Projects',
            displayField: 'name',
            editable: false
        });
        return tmpProjectComboBox;
    }
});