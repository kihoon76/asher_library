$(function(){
	var $editor = $('#worshipEditor');
	var $title = $('#worshipTitle');
	var extTab = parent.Ext.getCmp('app-contents');
	
	CKEDITOR.replace('worshipEditor', {
		height: '400px',
		on: {
			'loaded': function() {
				
			},
		}
	});
	
	$('#selBibleFromInAdd').on('change', function() {
		var $option = $(this).find(':selected'); //('config');
		var selectedIndex = $option.index();
		var $target = $('#selChapterFromInAdd');
		var datas = $option.data('config');
		
		Utils.makeOptions($target, datas, function(obj) {
			return {
				value:obj.totalParagraph,
				text:obj.chapter
			}
		});
		
		$('#selParagraphFromInAdd').html('');
		
		$('#selBibleToInAdd').trigger('change', selectedIndex);
	});
	
	$('#selChapterFromInAdd').on('change', function() {
		var paragraph = $(this).val();
		var intParagraph = parseInt(paragraph, 10);
		var $target = $('#selParagraphFromInAdd');
		
		Utils.makeOptions($target, intParagraph);
		$('#selChapterToInAdd').trigger('change', $(this).find(':selected').index());
	});
	
	$('#selParagraphFromInAdd').on('change', function() {
		$('#selParagraphToInAdd').trigger('change', $(this).find(':selected').index());
	});
	
	$('#selBibleToInAdd').on('change', function(e, p) {
		var $option = null;
		
		if(p != undefined) {
			$option = $(this).find('option').eq(p);
			$option.prop('selected', true);
		}
		else {
			$option = $(this).find(':selected');
		}
		
		var $target = $('#selChapterToInAdd');
		var datas = $option.data('config');
		
		Utils.makeOptions($target, datas, function(obj) {
			return {
				value:obj.totalParagraph,
				text:obj.chapter
			}
		});
		
		$('#selParagraphToInAdd').html('');
	});
	
	$('#selChapterToInAdd').on('change', function(e, p) {
		var paragraph = 0;
		if(p != undefined) {
			$option = $(this).find('option').eq(p);
			$option.prop('selected', true);
			paragraph = $option.val();
		}
		else {
			paragraph = $(this).val();
		}
		
		var intParagraph = parseInt(paragraph, 10);
		var $target = $('#selParagraphToInAdd');
		
		Utils.makeOptions($target, intParagraph);
	});
	
	$('#selParagraphToInAdd').on('change', function(e, p) {
		if(p == undefined) return;
		
		var $option = $(this).find('option').eq(p);
		$option.prop('selected', true);
	});
	
	$('#btnRegWorship').on('click', function() {
		fu.setParam({
			content: CKEDITOR.instances.worshipEditor.getData(),
			title:$.trim($title.val())
		});
		
		fu.save();
		
		/*var data = CKEDITOR.instances.worshipEditor.getData();
		var title = $.trim($title.val());
		
		if(title) {  
			if(data) {
				Utils.ajax({
					url: 'worship/reg',
					data: { content: data, title: title },
					method: 'POST',
					success: function(data, textStatus, jqXHR) {
						if(data.success) {
							Utils.showExtConfirm({
								type: 'alert',
								msg: '수정되었습니다'
							});
						}
						else {
							parent.Ext.Msg.alert('오류', data.errMsg);
						}
					}
				});
			}
			else {
				parent.Ext.Msg.alert('알림', '내용을 입력하세요', function() {
					$editor.focus();
				});
			}
		}
		else {
			parent.Ext.Msg.alert('알림', '제목을 입력하세요', function() {
				$title.focus();
			});
		}*/
	});
	
//	var categoryPanel = parent.Ext.getCmp('app-category');
//	
//	$('#btnDeleteNotice').on('click', function() {
//		var writeNum = $(this).data('num');
//		
//		Hotplace.showExtConfirm({
//			title: '알림',
//			msg: writeNum + '번 글을 삭제하시겠습니까?',
//			type: 'confirm',
//			callback: function(btn) {
//				if(btn == 'ok') {
//					Hotplace.ajax({
//						url: 'notice/if/content/' + writeNum,
//						method: 'DELETE',
//						success: function(data, textStatus, jqXHR) {
//							if(data.success) {
//								Hotplace.showExtConfirm({
//									type: 'alert',
//									msg: '삭제되었습니다',
//									callback: function() {
//										categoryPanel.rmCategoryInTab('notice-grid-' + writeNum);
//										extTab.remove(parent.Ext.getCmp('notice-grid-' + writeNum + '-panel'));
//									}
//								});
//							}
//							else {
//								Hotplace.showExtConfirm({
//									type: 'alert',
//									title: '오류',
//									msg: data.errMsg,
//									icon: parent.Ext.MessageBox.ERROR
//								});
//							}
//						}
//					});
//				}
//				else {
//					return;
//				}
//			}
//		});
//		
//	});
//	
//	$('#btnNoticeReg').on('click', function() {
//		var data = $.trim(CKEDITOR.instances.noticeEditor.getData());
//		var title = $.trim($title.val());
//		
//		if(title) {
//			if(data) {
//
//				Utils.ajax({
//					url: 'notice/if/regist',
//					data: { content: data, title: title },
//					method: 'POST',
//					success: function(data, textStatus, jqXHR) {
//						console.log(data)
//						if(data.success) {
//							parent.Ext.Msg.alert('결과', data.datas[0] + '번 글로 등록되었습니다', function() {
//								window.location.reload();
//							});
//						}
//						else {
//							parent.Ext.Msg.alert('오류', data.errMsg);
//						}
//					}
//				});
//			}
//			else {
//				parent.Ext.Msg.alert('알림', '내용을 입력하세요', function() {
//					$editor.focus();
//				});
//			}
//		}
//		else {
//			parent.Ext.Msg.alert('알림', '제목을 입력하세요', function() {
//				$title.focus();
//			});
//			
//		}
//	})
	
	/*Utils.fileUpload('', 'worship/reg', {
		dragdropWidth: '300px',
		previewHeight: '100px',
		previewWidth: '100px',
		statusBarWidth: '300px',
		dynamicFormData: function() {
            return {
            	title: $title.val(),
            	content: CKEDITOR.instances.worshipEditor.getData()
            }
        },
		//maxFileCount: 3,
		onSuccess: function(files, data, xhr) {
			console.log(data)
			if(data.success) {
				_saveMaemulSuccess();
			}
			else {
				var errCode = '';
				if(data.errCode == 'DUP') {
					errCode = hotplace.error.MAEMUL_DUP;
            	}
            	else {
            		errCode = hotplace.error.MAEMUL_REG;
            	}
				
				//이미지
				hotplace.upload.getFileupEl(_fileMaemul).reset();
				_maemulSelectedFiles = {};
				hotplace.processAjaxError(errCode);
				window.location.reload();
			}
		},
		onError: function(files, status, errMsg, pd) {
			Utils.getFileupEl(_fileMaemul).reset();
			_maemulSelectedFiles = {};
			 hotplace.dom.showAlertMsg(null, errMsg, {width:'40%'});
		},
		onSelect: function(files) {
			if(_maemulSelectedFiles[files[0].name]) {
	            hotplace.dom.showAlertMsg(null, '같은 이름의 파일이 있습니다.', {width:'200px'});
	            return false;
	        }
			
			_maemulSelectedFiles[files[0].name] = files[0];
			return true;
		},
		onCancel: function(files) {
			 delete _maemulSelectedFiles[files[0].name];
		}
	}));*/
	
	var fu = new FileUpload('#worshipFileUp', 'worship/reg', {
        maxFileCount: 3
	});
});

window.onload = function() {
	parent.Ext.getCmp('worshipAddWin').getEl().unmask();
};