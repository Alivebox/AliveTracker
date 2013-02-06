Ext.define("AliveTracker.controller.authentication.LoginController", {

    extend: "Ext.app.Controller",

    requires : [
        'AliveTracker.view.authentication.Login',
        'AliveTracker.view.authentication.ForgotPassword'
    ],
    init: function(){
        this.control({
            'loginform': {
                navigateToForgotPasswordView: this.onNavigateToForgotPasswordView
            }
        });
    },
    onNavigateToForgotPasswordView: function(){

    }



});