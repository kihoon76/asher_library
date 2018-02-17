Ext.define('Asher.view.window.WorshipAddWin', {
	extend: 'Ext.window.Window',
	xtype: 'worshipaddwin',
	id: 'worshipAddWin',
	initComponent: function() {
		//var searchWin = Ext.create('Asher.view.window.BibleSearchWin');
		Ext.apply(this, {
			height:Ext.getBody().getViewSize().height,
		    width:Ext.getBody().getViewSize().width, //80%
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
						var searchWin = Ext.create('Asher.view.window.BibleSearchWin');
						
						searchWin.getEl().mask('로딩중입니다');
						searchWin.show();
					},
				}
			}]
		});
		
		this.callParent(arguments);
	}
});