Ext.define('Asher.view.panel.CategoryPanel', {
	 extend      : 'Ext.tree.Panel'
    ,alias       : 'widget.categorypanel'
    //,uses        : ['Hotplace.util.Constants']
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
							text: '권한리스트', leaf : true, cate : 'authority', id : 'cate-authority-list'
						}]
					 }, {
						 text: '로그관리', expand: true, iconCls : 'tree-expand'
						,children : [{
							text: '로그리스트', leaf : true, cate : 'log', id : 'cate-log-list'
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