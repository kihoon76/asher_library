Ext.define('Asher.store.LogListStore', {
	 extend : 'Ext.data.Store',
	 requires : ['ASher.util.Constants'],
	 proxy : {
	        type : 'ajax'
	       ,url : ASher.util.Constants.context + '/log/list'
	       ,actionMethods : 'POST'
	       ,reader : {
	           type : 'json'
	          ,root : 'datas'
	          ,totalProperty : 'total'
	       }
	  },
	  fields : ['ip', 'accountId', 'referer', 'url', 'parameter', 'accessTime'],
	  autoLoad : true,
	  pageSize : ASher.util.Constants.gridPageSize
});