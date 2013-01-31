Ext.define('AliveTracker.view.home.Home', {

    extend:'Ext.Container',
    requires:[
        'AliveTracker.view.home.HomeGroupsViewer'
    ],
    xtype:'home',

    initComponent:function () {
        var tmpMyGroupsHeader = this.getMyGroupsHeader();
        var tmpGroupsViewer = this.getGroupsViewer();
        var tmpBelongGroups = this.getBelongGroupsHeader();
        var tmpBelongGroupsViewer = this.getBelongGroupsViewer();
        this.items = [
            tmpMyGroupsHeader,
            tmpGroupsViewer,
            tmpBelongGroups,
            tmpBelongGroupsViewer
        ];
        this.callParent(arguments);
    },

    getMyGroupsHeader:function () {
        var tmpMyGroupsHeader = {
            xtype:'container',
            layout:'column',
            items:[
                {
                    xtype:'label',
                    text:'My Groups'
                },
                {
                    xtype:'button',
                    text:'New'
                }
            ]
        };
        return tmpMyGroupsHeader;
    },

    getBelongGroupsHeader:function () {
        var tmpBelongGroupsHeader = {
            xtype:'container',
            layout:'column',
            items:[
                {
                    xtype:'label',
                    text:'Groups I belong to'
                }
            ]
        };
        return tmpBelongGroupsHeader;
    },

    getGroupsViewer:function () {
        var tmpGroupsViewer = {
            xtype: 'homegroupsviewer',
            store: 'Groups'
        };
        return tmpGroupsViewer;
    },

    getBelongGroupsViewer:function () {
        var tmpBelongGroupsViewer = {
            xtype: 'homegroupsviewer',
            store: 'BelongGroups'
        };
        return tmpBelongGroupsViewer;
    }

})