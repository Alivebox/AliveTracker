Ext.define('AliveTracker.view.projects.LogBook', {

    extend: 'Ext.Container',
    xtype: 'logBookform',
    requires : [
        'AliveTracker.view.projects.LogBookGridHeader',
        'AliveTracker.view.projects.LogBookGrid'
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
                        xtype: 'datepicker',
                        name: 'toDate',
                        allowBlank: false,
                        text: 'Date'
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
            },
            {
                xtype: 'logbookgridheader'
            },
            {
                xtype: 'logbookgrid'
            }
        ];
            this.callParent(arguments);
    },

    /**Creates a comboBox which hold group store*/
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

    /**Creates a comboBox which hold project store*/
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