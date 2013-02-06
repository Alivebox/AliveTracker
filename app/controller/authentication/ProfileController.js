Ext.define('AliveTracker.controller.authentication.ProfileController', {

    extend: "Ext.app.Controller",

    requires : [
        'AliveTracker.view.authentication.Profile'
    ],

    /**
     * Initializes components listeners
     */
    init: function(){
        this.control({
            'profileform': {
                saveAction: this.onSaveAction,
                cancelAction: this.onCancelAction

            }
        });
    },

    /**
     * Saves de data of the current profile
     */
    onSaveAction: function(){
        debugger;
    },

    /**
     * Cancels all information of the profile edition
     */
    onCancelAction: function(){
        debugger;
    }



});