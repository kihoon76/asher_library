Ext.define('Asher.store.WorshipListStore', {
	 extend : 'Ext.data.Store',
	 requires : ['Asher.util.Constants'],
	 proxy : {
	        type : 'ajax'
	       ,url : Asher.util.Constants.context + '/worship/list'
	       ,actionMethods : 'POST'
	       ,reader : {
	           type : 'json'
	          ,root : 'datas'
	          ,totalProperty : 'total'
	       }
	  },
	  fields : ['worshipDate', 'worshipTitle', 'worshipBible', 'worshipPreacher', 'worshipDay'],
	  autoLoad : true,
	  pageSize : Asher.util.Constants.gridPageSize
});