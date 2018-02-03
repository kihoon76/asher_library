Ext.define('Asher.controller.WorshipController', {
	extend: 'Asher.controller.BaseController',
	views: ['panel.WorshipListGridPanel'],
	onLaunch: function() {
		this.callParent(arguments);
	},
	onItemClick: function(tree, record, item, idx, e) {
		var recObj = record.raw;
		if(recObj.cate != 'worship') return;
		
		if(recObj.leaf) {
			if(!this.categoryPanel.isAttachedCategory(recObj.id)) {
				switch(recObj.id) {
				case 'cate-worship-list' :
					this.addContentTabPanel(recObj.id, recObj.text, {
						xtype: 'worshipgrid'
					});
					break;
				default :
					break;
				}
			}
			else {
				this.contentPanel.setActiveTab(recObj.id + '-panel');
			}
		}
	}
});