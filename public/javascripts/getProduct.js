$(function() {
	$('.category li').on('click', function() {
		var clo_type = $(this).data('type');
		
		$.ajax({
			url: '/product/'+clo_type,
			type: 'get',
			dataType: 'json',
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				console.log(data);
			}
		})
	});
})