Ext.define('AliveTracker.model.Project', {

    extend:'Ext.data.Model',

    idProperty:'idProject',

    fields:[
        {
            name:'name',
            type:'string'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/projects.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});