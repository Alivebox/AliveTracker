Ext.define('AliveTracker.controller.authentication.RegisterController', {

    extend:"Ext.app.Controller",

    requires:[
        'AliveTracker.view.authentication.Register'
    ],
    init:function () {
        this.control({
            'registerform':{
                registerAction:this.onRegisterAction

            }
        });
    },
    onRegisterAction:function () {
        debugger;
    }



});