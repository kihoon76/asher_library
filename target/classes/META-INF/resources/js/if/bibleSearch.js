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
			fromBibleNum: $('#selBibleFrom').val(),
			fromChapter: $('#selChapterFrom').text(),
			fromParagraph: $('#selParagraphFrom').val(),
			toBibleNum: $('#selBibleTo').val(),
			toChapter: $('#selChapterTo').text(),
			toParagraph: $('#selParagraphTo').val()
		};
		
		Utils.ajax({
			
		});
	});
	
});