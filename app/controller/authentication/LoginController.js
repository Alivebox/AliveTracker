Ext.define('AliveTracker.controller.authentication.LoginController', {

    extend:"Ext.app.Controller",

    requires:[
        'AliveTracker.view.authentication.Login',
        'AliveTracker.view.authentication.ForgotPassword'
    ],
    refs: [
        {
            ref: 'main',
            selector: 'main'
        }
    ],

    /**
     * Initializes components listeners
     */
    init:function () {
        this.control({
            'loginform':{
                navigateToForgotPasswordView:this.onNavigateToForgotPasswordView,
                loginAction:this.onLoginAction,
                signUpAction:this.onSignUpAction

            }
        });
    },

    /**
     * Changes current view to ForgotPassword view
     */
    onNavigateToForgotPasswordView:function () {
        var tmpMainView = this.getMain();
        var tmpForgotPasswordForm = tmpMainView.child('#forgotpasswordform');
        tmpForgotPasswordForm.tab.show();
        tmpMainView.setActiveTab(tmpForgotPasswordForm);

    },

    /**
     * Handles the logic of the login action
     */
    onLoginAction:function () {
        debugger;
    },

    /**
     * Handles the logic of the sign-up action
     */
    onSignUpAction:function () {
        debugger;
    }



});