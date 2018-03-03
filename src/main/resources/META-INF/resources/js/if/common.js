Utils = (function() {
	var _ROOT_CONTEXT = $('body').data('url');
	var _$file = null;
	var _selectedFiles = {};
	return {
		ajax: function(param) {
			var ajaxParam = {
				url: _ROOT_CONTEXT + param.url,
				method: param.method || 'POST',
				callback: param.callback || function(options, success, response) {
					
				},
			}
			
			if(param.jsonData) {
				ajaxParam.jsonData = param.jsonData;
			}
			else if(param.params) {
				ajaxParam.params = param.params;
			}
			
			parent.Ext.Ajax.request(ajaxParam);
		},
		showExtConfirm: function(param) {
			parent.Ext.Msg.show({
				title: param.title || '',
				msg: param.msg,
				buttons: (param.type == 'alert') ? parent.Ext.Msg.OK : (param.buttons || parent.Ext.Msg.OKCANCEL),
				icon: (param.type == 'alert' && !param.icon) ?  parent.Ext.MessageBox.WARNING : (param.icon || parent.Ext.MessageBox.QUESTION),
				fn: function(btn) {
					switch(param.type) {
					case 'alert' :
						if(btn == 'ok') {
							if(param.callback) param.callback(btn);
						}
						break;
					case 'confirm' :
						param.callback(btn);
						break;
					}
				}
			});
		},
		makeOptions: function($sel, param, callback) {
			var options = [];
			options.push('<option value="" selected> -- 선택 -- </option>');
			if($.isArray(param)) {
				
				var len = param.length;
				for(var i=0; i<len; i++) {
					var obj = callback(param[i]);
					options.push('<option value="' + obj.value + '">' + obj.text + '</option>');
				}
			}
			else {
				for(var i=0; i<param; i++) {
					options.push('<option value="' + (i+1) + '">' + (i+1) + '</option>');
				}
			}
			
			
			$sel.html(options.join(''));
		},
		getPath: function(url) {
			return _ROOT_CONTEXT + url;
		},
		
	}
})();
