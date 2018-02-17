$(function(){
	$('#selBibleFrom').on('change', function() {
		var $option = $(this).find(':selected'); //('config');
		var $target = $('#selChapterFrom');
		var datas = $option.data('config');
		
		Utils.makeOptions($target, datas, function(obj) {
			return {
				value:obj.totalParagraph,
				text:obj.chapter
			}
		});
	});
	
	$('#selChapterFrom').on('change', function() {
		var paragraph = $(this).val();
		var intParagraph = parseInt(paragraph, 10);
		var $target = $('#selParagraphFrom');
		
		Utils.makeOptions($target, intParagraph);
	});
	
	$('#selBibleTo').on('change', function() {
		var $option = $(this).find(':selected'); //('config');
		var $target = $('#selChapterTo');
		var datas = $option.data('config');
		
		Utils.makeOptions($target, datas, function(obj) {
			return {
				value:obj.totalParagraph,
				text:obj.chapter
			}
		});
	});
	
	$('#selChapterTo').on('change', function() {
		var paragraph = $(this).val();
		var intParagraph = parseInt(paragraph, 10);
		var $target = $('#selParagraphTo');
		
		Utils.makeOptions($target, intParagraph);
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