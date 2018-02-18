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
		
		/*function getChapter(list) {
			var len = list.length;
			var data = [];
			for(var i=0; i<len; i++) {
				data.push({
					bibleNum:list[i].bibleNum,
					chapter:list[i].chapter,
					totalParagraph:list[i].totalParagraph
				});
			}
			
			return data;
		}
		
		function getParagraph(count) {
			var data = [];
			if(count>0) {
				for(var i=0; i<count; i++) {
					data.push({
						paragraph:i+1
					});
				}
			}
			
			return data;
		}

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
                        fields: ['bibleNum', 'bibleLongLabel', 'list'], 
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
                    		var list = r[0].data.list;
                    		Ext.getCmp('chapterComboFrom').getStore().loadData(getChapter(list));
                    	}
                    }
                }, {
                    width: 50,
                    id: 'chapterComboFrom',
                    fieldLabel: '장',
                    store: new Ext.data.ArrayStore({
                    	fields: ['bibleNum', 'chapter', 'totalParagraph'],
                        data: []  // data is local
                    }),
                    editable: false,
                    valueField: 'chapter',
                    displayField: 'chapter',
                    queryMode: 'local',
                    margins: '0 0 0 5',
                    listeners: {
                    	select: function(cb, r) {
                    		var totalParagraph = r[0].data.totalParagraph;
                    		Ext.getCmp('paragraphComboFrom').getStore().loadData(getParagraph(totalParagraph));
                    	}
                    }
                }, {
                    width: 50,
                    fieldLabel: '절',
                    id:'paragraphComboFrom',
                    store: new Ext.data.ArrayStore({
                    	fields: ['paragraph'],
                        data: []  // data is local
                    }),
                    editable: false,
                    valueField: 'paragraph',
                    displayField: 'paragraph',
                    queryMode: 'local',
                    margins: '0 0 0 5'
                }, {
                    flex: 1,
                    fieldLabel: '말씀',
                    store: { 
                        fields: ['bibleNum', 'bibleLongLabel', 'list'], 
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
                    		var list = r[0].data.list;
                    		Ext.getCmp('chapterComboTo').getStore().loadData(getChapter(list));
                    	}
                    },
                    margins: '0 0 0 5'
                }, {
                    width: 50,
                    fieldLabel: '장',
                    id: 'chapterComboTo',
                    store: new Ext.data.ArrayStore({
                    	fields: ['bibleNum', 'chapter', 'totalParagraph'],
                        data: []  // data is local
                    }),
                    editable: false,
                    valueField: 'chapter',
                    displayField: 'chapter',
                    queryMode: 'local',
                    margins: '0 0 0 5',
                    listeners: {
                    	select: function(cb, r) {
                    		var totalParagraph = r[0].data.totalParagraph;
                    		Ext.getCmp('paragraphComboTo').getStore().loadData(getParagraph(totalParagraph));
                    	}
                    },
                }, {
                    width: 50,
                    id:'paragraphComboTo',
                    fieldLabel: '절',
                    store: new Ext.data.ArrayStore({
                    	fields: ['paragraph'],
                        data: []  // data is local
                    }),
                    editable: false,
                    valueField: 'paragraph',
                    displayField: 'paragraph',
                    queryMode: 'local',
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
        });*/
		
		Ext.apply(this, {
			height:Ext.getBody().getViewSize().height * 0.6,
		    width:Ext.getBody().getViewSize().width * 0.6, //80%
		    title:'test',
			autoShow: true,
			modal: false,
			items: [Ext.create('Asher.view.iframe.BaseIframe', { url: 'worship/if/bibleSearchForm' })],
			layout: 'fit',
			draggable:false,
			resizable:false,
			minimizable:true,
			listeners: {
	            'minimize': function (window, opts) {
	                window.collapse();
	                window.setWidth(200);
	                window.alignTo(Ext.getBody(), 'bl-bl')
	            }
	        },
	        tools: [{
	            type: 'restore',
	            handler: function (evt, toolEl, owner, tool) {
	                var window = owner.up('window');
	                window.setWidth(Ext.getBody().getViewSize().width * 0.6);
	                window.expand('', false);
	                window.center();
	            }
	        }]
		});
		
		this.callParent(arguments);
	}
});