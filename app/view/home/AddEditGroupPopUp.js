Ext.define('AliveTracker.view.home.AddEditGroupPopUp', {

    extend:'Ext.window.Window',
    xtype:'addprojectpopup',
    title:'Groups',
    height:400,
    width:400,
    insert: true,
    renderTo: Ext.getBody(),
    initComponent:function () {
        this.groupImage = this.onCreateImage();
        this.items = [
            this.groupImage,
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'filefield',
                        name: 'photo',
                        fieldLabel: 'Photo',
                        labelWidth: 50,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: 'Select Photo...'
                    }
                ],

                buttons: [
                    {
                        text: 'Upload',
                        handler: function(){
                            var form = this.up('form').getForm();
                            if(form.isValid()){
                                form.submit({
                                    waitMsg: 'Uploading your photo...',
                                    success: function(fp, o) {
                                        this.groupImage.setSource(o.result.file)
                                    }
                                });
                            }
                        }
                    }
                ]
            }
        ],
            this.callParent(arguments);
    },

    onCreateImage: function(){
        var tmpImage = Ext.create('Ext.Img', {
            src: '',
            renderTo: Ext.getBody()
        });
        return tmpImage;
    },

    onUploadPicture: function(){
        var form = this.up('form').getForm();
        debugger;
        if(form.isValid()){
            form.submit({
                waitMsg: 'Uploading your photo...',
                success: function(fp, o) {
                    Ext.Msg.alert('Success', 'Your photo "' + o.result.file + '" has been uploaded.');
                }
            });
        }
    }
});