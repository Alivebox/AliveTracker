Ext.define('AliveTracker.controller.authentication.ProfileController', {

    extend: "Ext.app.Controller",

    refs: [

        {
            ref: 'email',
            selector: 'profileform #emailProfile'
        },
        {
            ref: 'name',
            selector: 'profileform #nameProfile'
        },
        {
            ref: 'password',
            selector: 'profileform #passwordProfile'
        },
        {
            ref:'confirmPassword',
            selector:'profileform #confirmPasswordProfile'
        }
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
        var tmpEmail = this.getEmail().value;
        var tmpName = this.getName().value;
        var tmpPassword = this.getPassword().value;
        var tmpConfirmPassword = this.getConfirmPassword().value;
        debugger;
    },

    /**
     * Cancels all information of the profile edition
     */
    onCancelAction: function(){
        debugger;
    }



});