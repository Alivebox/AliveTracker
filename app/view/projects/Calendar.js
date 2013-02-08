Ext.define('AliveTracker.view.projects.Calendar', {

    extend: 'Ext.Container',
    xtype: 'calendarview',
    requires: [
        'AliveTracker.view.projects.calendar.CalendarPanel'
    ],
    initComponent: function(){
        this.items = [
            {
                xtype: 'datepicker',
                id: 'app-nav-picker',
                cls: 'ext-cal-nav-picker'
            },
            {
                xtype: 'calendarpanel',
                border: false,
                id:'app-calendar',
                region: 'center'
            }
        ];
        this.callParent(arguments);
    }
});