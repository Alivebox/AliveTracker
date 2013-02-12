Ext.define('AliveTracker.view.home.HomeGroupsViewer', {

    extend:'Ext.view.View',
    xtype:'homegroupsviewer',
    requires : [
        'Ext.ux.DataView.DragSelector'
    ],
    initComponent: function(){
        Ext.applyIf(this,{
            tpl: [
                '<tpl for=".">',
                '<div style="margin-bottom: 10px;width: 60px;height: 60px; float: left;" class="thumb-wrap">' +
                    '<div id="delete">' +
                        '<img id="{id}" class="deleteProject" src="/resources/icons/deleteIcon.png" title="Delete" style="float: right;"/></br>' +
                    '</div>' +
                    '<div class="thumb"> ' +
                        '<img id="{name}" class="projectImage" src="{logoUrl}" title="{description}"/>' +
                    '</div>',
                '<label for="name">{name}</label>' +
                    '</div>' +
                    '</tpl>' +
                    '<div class="x-clear"></div></br></br>'
            ],
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No groups created',
            trackOver: true,
            overItemCls: 'x-item-over',
            plugins: [
                Ext.create('Ext.ux.DataView.DragSelector', {})
            ],
            listeners: {
//                selectionchange: function(){
//                    //var l = nodes.length,
//                    //    s = l !== 1 ? 's' : '';
//                    //this.up('panel').setTitle('Simple DataView (' + l + ' item' + s + ' selected)');
//                    debugger;
//                }
            }
        });
        this.callParent(arguments);
    }

});