$(function() {
	$('.category li').on('click', function() {
		var CLO_TYPE = $(this).data('type');
		
		getProduct(CLO_TYPE);
	});
	
	//getProduct('bra')
})

function getProduct(type) {
	var SRC = '/images/product/'+ type +'/';
	
	$.ajax({
		url: '/product/'+type,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			var data = data.datas,
				len = data.length,
				html = '';
			for(var i = 0; i < len; i++) {
				html += '<div class="col-md-4 col-lg-3 pro-item">' 
					+ '<img src="'+ SRC + data[i].link +'"></div>';
			}
			$('.pro-box-con').html(html);
		},
		error: function(data) {
			console.log(data);
		}
	})
}