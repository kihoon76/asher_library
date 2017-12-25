Ext.define('Asher.controller.ScheduleController', {
	extend: 'Asher.controller.BaseController',
	views: ['iframe.BaseIframe'],
	onLaunch: function() {
		this.callParent(arguments);
	},
	onItemClick: function(tree, record, item, idx, e) {
		var recObj = record.raw;
		
		if(recObj.leaf) {
			if(!this.categoryPanel.isAttachedCategory(recObj.id)) {
				switch(recObj.id) {
				case 'cate-schedule' :
					this.addContentTabPanel(
							recObj.id,
							recObj.text,
							Ext.create('Asher.view.iframe.BaseIframe', { url: 'schedule/if/registForm' }));
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