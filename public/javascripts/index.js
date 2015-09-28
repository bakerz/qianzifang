$(function() {
	var $_album_item = $('#qzf-album .qzf-album-item');
	$_album_item.mouseover(function() {
		$(this).find('.cover').show();
	});
	$_album_item.mouseout(function() {
		$(this).find('.cover').hide();
	});
});