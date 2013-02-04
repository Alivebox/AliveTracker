Ext.define('AliveTracker.store.Projects', {

    extend: 'Ext.data.Store',

    id: 'projectStore',
    autoLoad: false,
    model: 'AliveTracker.model.Project'

});