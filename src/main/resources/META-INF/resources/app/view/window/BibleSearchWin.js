Ext.define('Asher.view.window.BibleSearchWin', {
	extend: 'Ext.window.Window',
	xtype: 'biblesearchwin',
	id: 'bibleSearchWin',
	initComponent: function() {
		var that = this;
		Ext.apply(this, {
			height:Ext.getBody().getViewSize().height,
		    width:Ext.getBody().getViewSize().width, //80%
		    title:'test',
			autoShow: true,
			modal: false,
			items: [Ext.create('Asher.view.iframe.BaseIframe', { url: 'worship/if/bibleSearchForm' })],
			layout: 'fit',
			draggable:false,
			resizable:false,
			/*listeners: {
	            'minimize': function (window, opts) {
	                window.collapse();
	                window.setWidth(200);
	                window.alignTo(Ext.getBody(), 'bl-bl')
	            },
	            'maximize': function (window, opts) {
	               
	            },
	        },*/
	        tools: [{
	            type: 'minimize',
	            id:'min',
	            handler: function (evt, toolEl, owner, tool) {
	                var window = owner.up('window');
	                window.collapse();
	                window.setWidth(200);
	                window.alignTo(Ext.getBody(), 'bl-bl')
	                this.hide();
	                Ext.getCmp('max').show();
	            }
	        },{
	            type: 'maximize',
	            id:'max',
	            handler: function (evt, toolEl, owner, tool) {
	                var window = owner.up('window');
	                window.restore().maximize();
	                this.hide();
	                Ext.getCmp('min').show();
	            },
	            hidden:true
	        }]
		});
		
		this.callParent(arguments);
	}
});