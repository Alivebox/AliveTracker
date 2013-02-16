/**
 * Created with JetBrains PhpStorm.
 * User: Andres
 * Date: 14/02/13
 * Time: 02:23 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("AliveTracker.controller.group.AddUsersGroupController", {

    extend: "Ext.app.Controller",

    init: function(){
        this.control({
            'addusersgroup': {
                boxready : this.onAddUsersGroupBoxReady,
                comboUsersKeyUp: this.onFilterComboUsers
            }
        });
    },

    onAddUsersGroupBoxReady:function(abstractcomponent, width, height, options){
        this.addListeners(abstractcomponent);
    },

    addListeners:function(abstractcomponent){
        var me = this,
            addUsersGroupEl = abstractcomponent.getEl();
        addUsersGroupEl.on('click', me.onNewUserClick, me, {delegate: '#btnAddUser'});
    },

    onNewUserClick:function(e, el){
        alert('New Click');
        //this.addUserPopUp = this.getAddUserPopUp();
    },

    getAddUserPopUp: function(){
        var tmpAddUserPopUp = Ext.create('AliveTracker.view.group.AddUsersGroupPopUp');
        tmpAddUserPopUp.show();
        return tmpAddUserPopUp;
    },

    onFilterComboUsers: function (argDataToFilter){
        var query = argDataToFilter.toLowerCase();
        var tmpStore = Ext.getStore('Users');
        tmpStore.clearFilter();
        tmpStore.filterBy(function(record, id) {
            var name_check = record.get('name').toLowerCase().indexOf(query)
            if( name_check > -1){
                return true;
            }
            else{
                return false;
            }
        });
    }

});