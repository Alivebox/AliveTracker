Ext.define('AliveTracker.controller.authentication.RegisterController', {

    extend:"Ext.app.Controller",

    requires:[
        'AliveTracker.view.authentication.Register'
    ],

    /**
     * Initializes components listeners
     */
    init:function () {
        this.control({
            'registerform':{
                registerAction:this.onRegisterAction

            }
        });
    },
    /**
     * Handles the logic of the register action
     */
    onRegisterAction:function () {
        debugger;
    }



});