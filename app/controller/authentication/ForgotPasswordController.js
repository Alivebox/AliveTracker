Ext.define('AliveTracker.controller.authentication.ForgotPasswordController', {

    extend: "Ext.app.Controller",

    requires : [
        'AliveTracker.view.authentication.ForgotPassword'
    ],
    init: function(){
        this.control({
            'forgotpasswordform': {
                sendResetInstruccions: this.onSendResetInstruccions

            }
        });
    },
    onSendResetInstruccions: function(){
        debugger;
    }



});