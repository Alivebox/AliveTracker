Ext.define('AliveTracker.view.group.ProjectsGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'projectGrid',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    menuDisabled:true,
                    text: 'Name',
                    sortable : false,
                    dataIndex: 'name',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    xtype: 'gridcolumn',
                    menuDisabled:true,
                    text: 'Team',
                    sortable : false,
                    editor: {
                        xtype:'combobox',
                        allowBlank:true,
                        store:'Users',
                        displayField:'name',
                        editable:false
                    }
                },
                {
                    xtype: 'gridcolumn',
                    menuDisabled:true,
                    text: 'Users'
                },
                {
                    xtype: 'gridcolumn',
                    menuDisabled:true,
                    text: 'Created'
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    text: 'Buttons',
                    sortable:false,
                    align : 'center',
                    items:[
                        {
                            icon:AliveTracker.default.Constants.EDIT_USERS_GRID_BUTTON,
                            tooltip: AliveTracker.default.Constants.GROUP_DETAIL_EDIT_USER_OF_PROJECT,
                            handler: function(grid, rowIndex, colIndex) {
                                this.addProjectPopup = Ext.create('AliveTracker.view.group.UserRolesAssignmentPopUp');
                                this.addProjectPopup.title = grid.store.getAt(rowIndex).data.name;
                                this.addProjectPopup.show();
                            }
                        },
                        {
                            icon:AliveTracker.default.Constants.REMOVE_GRID_ROW_BUTTON,
                            tooltip: AliveTracker.default.Constants.GROUP_DETAIL_REMOVE_USER_OF_PROJECT,
                            handler: function(grid, rowIndex, colIndex) {
                                Ext.MessageBox.confirm(
                                    'Confirm',
                                    Ext.util.Format.format(AliveTracker.default.Constants.GRID_DELETE_ROW_CONFIRMATION_MESSAGE),
                                    function(argButton){
                                        if(argButton == 'yes')
                                        {
                                            grid.getStore().removeAt(rowIndex);
                                        }
                                    },
                                    this
                                );


                            }
                        }
                    ]
                }
            ],
            selType: 'cellmodel',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            ]
        });

        me.callParent(arguments);
    }
});