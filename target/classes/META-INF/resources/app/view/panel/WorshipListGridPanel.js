Ext.define('Asher.view.panel.WorshipListGridPanel', {
	extend: 'Ext.grid.Panel',
	requires : ['Asher.util.Constants'],
	xtype: 'worshipgrid',
	id: 'worshipListGrid',
	initComponent: function() {
		var store = Ext.create('Asher.store.WorshipListStore'),
			constants = Asher.util.Constants,
			//controller = _hotplaceApp.getController('NoticeController'),
			categoryPanel = Ext.getCmp('app-category'),
			contentPanel = Ext.getCmp('app-contents'),
			that = this;
		
		Ext.apply(this, {
			store: store,
			columns: [{
				text: '날짜',
				dataIndex: 'worshipDate',
				flex: 0
			}, {
				text: '제목',
				dataIndex: 'worshipTitle',
				flex: 1
			}, {
				text: '말씀',
				dataIndex: 'worshipBible',
				flex: 0
			}, {
				text: '요일',
				dataIndex: 'worshipDay',
				flex: 0
			}, {
				text: '설교자',
				dataIndex: 'worshipPreacher',
				flex: 0
			}],
			tbar: [{
				xtype: 'button',
				text: '추가',
				iconCls: 'icon-add',
				listeners: {
					click: function() {
						var w = Ext.create('Asher.view.window.WorshipAddWin');
						w.getEl().mask('로딩중입니다');
					}
				}
				
			}, '->',
			       '검색항목 : ',
			       {
				
			}],
			dockedItems: [{
				xtype: 'pagingtoolbar',
				store: store,
				displayInfo: true,
				displayMsg: '예배 리스트 {0} - {1} of {2}',
				dock: 'bottom',
				doRefresh: function() {
					Ext.getCmp('worshipListGrid').getStore().load();
				},
				items: ['-', {
					text: '목록수 : '
				}, Ext.create('Ext.form.field.ComboBox', {
					queryMode: 'local',
					id: 'worship-paging-combo',
					displayField: 'name',
					valueField: 'value',
					editable: false,
					width: 100,
					value: constants.gridPageSize,
					store: Ext.create('Asher.store.PagingSize'),
					listeners: {
						change: function(cb, nV, oV) {
							store.pageSize = nV;
							Ext.getCmp('worshipListGrid')
							   .getStore()
							   .loadPage(1, {
								   params: { limit: nV}
							   });
						}
					}
				})]
			}],
			listeners: {
				itemdblclick: function(grd, rec) {
					
				}
			}
		});
		
		this.callParent(arguments);
	}
});