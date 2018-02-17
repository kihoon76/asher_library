var Utils = (function() {
	var _ROOT_CONTEXT = $('body').data('url');
	
	/*******************************************************
	 * waitMe
	 *******************************************************/
	var _loadEl;
	var _loadTxt = '';//'로딩 중입니다';
	var _loadEndCount = 0;
	
	var _loadEffects = {
		bounce: 'bounce',
		rotateplane: 'rotateplane',
		stretch: 'stretch',
		orbit: 'orbit',
		roundBounce: 'roundBounce',
		win8: 'win8',
		win8_linear: 'win8_linear',
		ios: 'ios',
		facebook: 'facebook',
		rotation: 'rotation',
		timer: 'timer',
		pulse: 'pulse',
		progressBar: 'progressBar',
		bouncePulse: 'bouncePulse'
	};
	
	function _runWaitMe(loadEl, num, effect, msg){
		
		var fontSize = '';
		var maxSize = '';
		var loadTxt = msg || '';//'로딩 중입니다';
		var textPos = '';
		
		switch (num) {
			case 1:
			maxSize = '';
			textPos = 'vertical';
			fontSize = '25px';
			break;
			case 2:
			loadTxt = '';
			maxSize = 30;
			textPos = 'vertical';
			break;
			case 3:
			maxSize = 30;
			textPos = 'horizontal';
			fontSize = '18px';
			break;
		}
		
		_loadEl = loadEl;
		_loadEl.waitMe({
			effect: effect,
			text: loadTxt,
			bg: 'rgba(255,255,255,0.4)',//'rgba(255,255,255,0.4)',
			color: '#000',
			maxSize: maxSize,
			source: 'img.svg',
			textPos: textPos,
			fontSize: fontSize,
			onClose: function() {}
		});
	}
	
	return {
		ajax: function() {
			//parent.Ext.
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
		}
	}
})();
