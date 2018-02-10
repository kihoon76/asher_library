Ext.define('Asher.view.window.BibleSearchWin', {
	extend: 'Ext.window.Window',
	xtype: 'biblesearchwin',
	id: 'bibleSearchWin',
	initComponent: function() {
		
		/*var states = Ext.create('Ext.data.Store', {
		    fields: ['bibleNum', 'label'],
		    data : [
		        {"abbr":"AL", "name":"Alabama"},
		        {"abbr":"AK", "name":"Alaska"},
		        {"abbr":"AZ", "name":"Arizona"}
		        //...
		    ]
		});*/

		var form = Ext.widget('form', {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            bodyPadding: 10,

            fieldDefaults: {
                labelAlign: 'top',
                labelWidth: 100,
                labelStyle: 'font-weight:bold'
            },
            items: [{
                xtype: 'fieldcontainer',
                fieldLabel: '말씀검색',
                labelStyle: 'font-weight:bold;padding:0',
                layout: 'hbox',
                defaultType: 'combobox',

                fieldDefaults: {
                    labelAlign: 'top'
                },

                items: [{
                    flex: 1,
                    fieldLabel: '말씀',
                    store: { 
                        fields: ['bibleNum', 'bibleLongLabel'], 
                        proxy: { 
                            type: 'ajax', 
                            url: 'worship/bible/label' 
                        } 
                    },
                    valueField: 'bibleNum',
                    displayField: 'bibleLongLabel',
                    editable: false,
                    listeners: {
                    	select: function(cb, r) {
                    		var bibleNum = r[0].data.bibleNum;
                    	}
                    }
                }, {
                    width: 50,
                    fieldLabel: '장',
                    valueField: 'chaptor',
                    displayField: 'paragraphe',
                    queryMode: 'local',
                    margins: '0 0 0 5'
                }, {
                    width: 50,
                    name: 'middleInitial',
                    fieldLabel: '절',
                    margins: '0 0 0 5'
                }, {
                    flex: 1,
                    name: 'lastName',
                    //afterLabelTextTpl: required,
                    fieldLabel: '말씀',
                    allowBlank: false,
                    margins: '0 0 0 5'
                }, {
                    width: 50,
                    name: 'middleInitial',
                    fieldLabel: '장',
                    margins: '0 0 0 5'
                }, {
                    width: 50,
                    name: 'middleInitial',
                    fieldLabel: '절',
                    margins: '0 0 0 5'
                }]
            }, {
                xtype: 'textareafield',
                fieldLabel: '결과',
                grow: true
            }],

            buttons: [{
                text: 'Cancel',
                handler: function() {
                    this.up('form').getForm().reset();
                    this.up('window').hide();
                }
            }, {
                text: 'Send',
                handler: function() {
                }
            }]
        });
		
		Ext.apply(this, {
			height:Ext.getBody().getViewSize().height * 0.6,
		    width:Ext.getBody().getViewSize().width * 0.6, //80%
			autoShow: false,
			closeAction: 'hide',
			modal: true,
			items: form,
			layout: 'fit',
		});
		
		this.callParent(arguments);
	}
});