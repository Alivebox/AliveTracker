Ext.define('AliveTracker.controller.authentication.ProfileController', {

    extend: "Ext.app.Controller",

    requires : [
        'AliveTracker.view.authentication.Profile'
    ],
    init: function(){
        this.control({
            'profileform': {
                saveAction: this.onSaveAction,
                cancelAction: this.onCancelAction

            }
        });
    },
    onSaveAction: function(){
        debugger;
    },
    onCancelAction: function(){
        debugger;
    }



});