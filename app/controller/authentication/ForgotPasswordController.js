Ext.define('AliveTracker.controller.authentication.ForgotPasswordController', {

    extend: "Ext.app.Controller",

    requires : [
        'AliveTracker.view.authentication.ForgotPassword'
    ],

    /**
     * Initializes components listeners
     */
    init: function(){
        this.control({
            'forgotpasswordform': {
                sendResetInstruccions: this.onSendResetInstruccions

            }
        });
    },

    /**
     * Sends via email the reset password instructions
     */
    onSendResetInstruccions: function(){
        debugger;
    }



});