$(function(){
	$('#selBibleFrom').on('change', function() {
		var $option = $(this).find(':selected'); //('config');
		var selectedIndex = $option.index();
		var $target = $('#selChapterFrom');
		var datas = $option.data('config');
		
		Utils.makeOptions($target, datas, function(obj) {
			return {
				value:obj.totalParagraph,
				text:obj.chapter
			}
		});
		
		$('#selParagraphFrom').html('');
		
		$('#selBibleTo').trigger('change', selectedIndex);
	});
	
	$('#selChapterFrom').on('change', function() {
		var paragraph = $(this).val();
		var intParagraph = parseInt(paragraph, 10);
		var $target = $('#selParagraphFrom');
		
		Utils.makeOptions($target, intParagraph);
		$('#selChapterTo').trigger('change', $(this).find(':selected').index());
	});
	
	$('#selParagraphFrom').on('change', function() {
		$('#selParagraphTo').trigger('change', $(this).find(':selected').index());
	});
	
	$('#selBibleTo').on('change', function(e, p) {
		var $option = null;
		
		if(p != undefined) {
			$option = $(this).find('option').eq(p);
			$option.prop('selected', true);
		}
		else {
			$option = $(this).find(':selected');
		}
		
		var $target = $('#selChapterTo');
		var datas = $option.data('config');
		
		Utils.makeOptions($target, datas, function(obj) {
			return {
				value:obj.totalParagraph,
				text:obj.chapter
			}
		});
		
		$('#selParagraphTo').html('');
	});
	
	$('#selChapterTo').on('change', function(e, p) {
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
		var $target = $('#selParagraphTo');
		
		Utils.makeOptions($target, intParagraph);
	});
	
	$('#selParagraphTo').on('change', function(e, p) {
		if(p == undefined) return;
		
		var $option = $(this).find('option').eq(p);
		$option.prop('selected', true);
	});
	
	$('#btnBibleSearch').on('click', function() {
		var param = {
			fromBibleNum: $('#selBibleFrom option:selected').val(),
			fromChapter: $('#selChapterFrom option:selected').text(),
			fromParagraph: $('#selParagraphFrom option:selected').val(),
			toBibleNum: $('#selBibleTo option:selected').val(),
			toChapter: $('#selChapterTo option:selected').text(),
			toParagraph: $('#selParagraphTo option:selected').val()
		};
		
		Utils.ajax({
			url: 'worship/if/bibleSearch',
			jsonData: JSON.stringify(param),
			callback: function(options, success, response) {
				console.log(success);
				console.log(response)
				
				if(success) {
					var res = response.responseText;
					var jo = $.parseJSON(res);
					
					if(jo.success) {
						$('#dvBibleSearchResult').html(jo.datas[0]);
					}
				}
				
			}
		});
	});
	

	
});

window.onload = function() {
	parent.Ext.getCmp('bibleSearchWin').getEl().unmask();
};