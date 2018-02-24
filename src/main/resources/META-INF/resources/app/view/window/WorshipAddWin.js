Ext.define('Asher.view.window.WorshipAddWin', {
	extend: 'Ext.window.Window',
	xtype: 'worshipaddwin',
	id: 'worshipAddWin',
	initComponent: function() {
		var searchWin = null;
		
		Ext.apply(this, {
			height:Ext.getBody().getViewSize().height,
		    width:Ext.getBody().getViewSize().width, 
			autoShow: true,
			modal: true,
			items: [Ext.create('Asher.view.iframe.BaseIframe', { url: 'worship/if/addForm' })],
			layout: 'fit',
			tbar: [{
				xtype: 'button',
				text: '말씀검색',
				iconCls: 'icon-search',
				listeners: {
					click: function() {
						var searchWin = null;
						var oldSearchWin = Ext.getCmp('bibleSearchWin');
						
						if(!oldSearchWin) {
							searchWin = Ext.create('Asher.view.window.BibleSearchWin');
							
							searchWin.getEl().mask('로딩중입니다');
							searchWin.show();
						}
						else {
							oldSearchWin.toFront();
							oldSearchWin.toggleMaximize();
						}
					},
				}
			}]
		});
		
		this.callParent(arguments);
	}
});