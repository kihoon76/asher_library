Ext.define('Asher.view.panel.CategoryPanel', {
	 extend      : 'Ext.tree.Panel'
    ,alias       : 'widget.categorypanel'
    //,uses        : ['Asher.util.Constants']
    ,title       : '카테고리'
    ,initComponent : function() {
    	var addedCategoryMap = {};
    	
    	Ext.apply(this, {
    		 store : Ext.create('Ext.data.TreeStore', {
    	    	 root : {
    	    		  expanded : true
					 ,children : [{
						 text: '일정관리', expand: true, iconCls : 'tree-collapse', cate : 'schedule', id : 'cate-schedule', leaf : true
					 },{
						 text: '재정관리', expand: true, iconCls : 'tree-expand'
						,children : [{
							text: '재정등록', leaf : true, cate : 'money', id : 'cate-money-reg'
						}]
					 }, {
						 text: '예배', expand: true, iconCls : 'tree-expand'
						,children : [{
							text: '예배리스트', leaf : true, cate : 'worship', id : 'cate-worship-list'
						}]
					 }, {
						 text: '기도회', expand: true, iconCls : 'tree-expand'
						,children : [{
							text: '하누카', leaf : true, cate : 'pray', id : 'cate-pray-hanuka'
						}, {
							text: '오순절', leaf : true, cate : 'pray', id : 'cate-pray-osunjeol'
						}]
					 }]
    	    	 }
    	    })
    	    ,rootVisible : false
    	    ,isAttachedCategory : function(id) {
     	 	   return addedCategoryMap[id] != null;
     	    }
     	    ,addCategoryInTab : function(id) {
     	    	addedCategoryMap[id] = 'Y';
     	    }
     	    ,rmCategoryInTab : function(id) {
     	    	delete addedCategoryMap[id];
     	    }
     	    ,rmAllInTab : function() {
     	    	addedCategoryMap = {};
     	    }
    	    ,listeners : {
    	    	itemexpand : function(n, opt) {
    	    		n.set('iconCls', 'tree-expand');
    	    	}
    	       ,itemcollapse : function(n, opt) {
    	    	   console.log(n)
    	    	   n.set('iconCls', 'tree-collapse');
    	       }
    	    }
    	});

    	this.callParent(arguments);
    }
});