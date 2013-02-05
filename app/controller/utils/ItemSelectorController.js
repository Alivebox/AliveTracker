Ext.define('AliveTracker.controller.utils.ItemSelectorController', {

    extend: "Ext.app.Controller",
    requires : [
        'AliveTracker.view.utils.ItemSelector'
    ],
    init: function(){
        this.control({
            'itemselector': {
                addOneItem: this.onAddOneItem,
                addAllItems : this.onAddAllItems,
                removeOneItem: this.onRemoveOneItem,
                removeAllItems : this.onRemoveAllItems
            }
        });
    },

    onAddOneItem: function(argItems){
        var tmpAvailableList = argItems.items[0];
        var tmpAssignedList = argItems.items[2];
        var tmpData = (tmpAvailableList.getSelectionModel().getSelection())[0].data;
        var tmpAvailableListStore = tmpAvailableList.store;
        tmpAvailableListStore.remove(tmpData);
        tmpAvailableListStore.commitChanges();
        debugger;

    },
    onAddAllItems: function(argItems){
        var tmpAvailableList = argItems.items[0];
        var tmpAssignedList = argItems.items[2];
        debugger;
    },
    onRemoveOneItem: function(argItems){
        var tmpAvailableList = argItems.items[0];
        var tmpAssignedList = argItems.items[2];
        var tmpData = (tmpAssignedList.getSelectionModel().getSelection())[0].data;
        debugger;
    },
    onRemoveAllItems: function(argItems){
        var tmpAvailableList = argItems.items[0];
        var tmpAssignedList = argItems.items[2];
        debugger;
    }



});