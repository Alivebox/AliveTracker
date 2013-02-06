Ext.define('AliveTracker.controller.authentication.LoginController', {

    extend:"Ext.app.Controller",

    requires:[
        'AliveTracker.view.authentication.Login',
        'AliveTracker.view.authentication.ForgotPassword'
    ],
    init:function () {
        this.control({
            'loginform':{
                navigateToForgotPasswordView:this.onNavigateToForgotPasswordView,
                loginAction:this.onLoginAction,
                signUpAction:this.onSignUpAction

            }
        });
    },
    onNavigateToForgotPasswordView:function () {
        debugger;
        //Ext.create('AliveTracker.view.authentication.ForgotPassword');
    },
    onLoginAction:function () {
        debugger;
    },
    onSignUpAction:function () {
        debugger;
    }



});