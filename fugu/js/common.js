if ($(window).width() < 1446 && $(window).width() > 1266) {
	$('.wrap > div:nth-child(8)').removeClass('show');
}else if($(window).width() < 1266 && $(window).width() > 1084){
	$('.wrap > div:nth-child(8)').removeClass('show');
	$('.wrap > div:nth-child(7)').removeClass('show');
}else if($(window).width() < 1085 && $(window).width() > 903){
	$('.wrap > div:nth-child(8)').removeClass('show');
	$('.wrap > div:nth-child(7)').removeClass('show');
	$('.wrap > div:nth-child(6)').removeClass('show');
}else if($(window).width() < 901 && $(window).width() > 640){
	$('.wrap > div:nth-child(8)').removeClass('show');
	$('.wrap > div:nth-child(7)').removeClass('show');
	$('.wrap > div:nth-child(6)').removeClass('show');
	$('.wrap > div:nth-child(5)').removeClass('show');
}else if($(window).width() < 641 && $(window).width() > 300){
	$('.wrap > div:nth-child(8)').removeClass('show');
	$('.wrap > div:nth-child(7)').removeClass('show');
	$('.wrap > div:nth-child(6)').removeClass('show');
	$('.wrap > div:nth-child(5)').removeClass('show');
	$('.wrap > div:nth-child(4)').removeClass('show');
	$('.wrap > div:nth-child(3)').removeClass('show');
}

$(document).ready(function() {
	$('.menu,.cart-wr').css('padding-top',$('.wraper > div:nth-child(1)').outerHeight());
	/*$('.slider-wrap').slick({
		dots: false,
		infinite: false,
		slidesToShow: 3,
		arrows: false
	  });*/
	$('.akc-wr>div').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		arrows: false
	});
	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: '6438221094.65a7c60.ea91d0ffd8df4d0182aa91022d631143', count: 9},
		success: function(resp) {
			if (resp.meta && resp.meta.code == 200) {
				if (resp.data && resp.data.length) {
					for (var i in resp.data) {
						$('#inst-wr').append('<a href="' + resp.data[i].link + '" target="_blank" style="background-image: url('+resp.data[i].images.standard_resolution.url+')"></a>');
					}
				} else {
					$('#inst-wr').text('Sorry! No images found.');
				}
			} else {
				$('#inst-wr').text((resp.meta && resp.meta.code && resp.meta.error_message ? 'Instagram Error (' + resp.meta.code + '): ' + resp.meta.error_message : 'Error retrieving images.'));
			}
		},
		error: function() {
		}
	});

	$('.menu-wrap a').click(function (e) { 
		e.preventDefault();
		var hash = this.hash;
		console.log(hash);
		$('html, body').animate({
			scrollTop: ($(hash).offset().top-$('.wraper > div:nth-child(1)').outerHeight())
		}, 800);
	});
	
	$('.cart').click(function (e) { 
		e.preventDefault();
		$('.cart-wr').toggleClass('active');
		
	});
	$('.rolls .wrap>div').click(function (e) { 
		e.preventDefault();
		$('.cart .icon+span').text(($('.cart .icon+span').text()*1)+1);
		$('.items').append('<div><h3>'+$(this).data('name')+'</h3><span>'+$(this).data('price')+' грн.</span></div>');
		$('.total-line span').text(($('.total-line span').text()*1)+$(this).data('price'));
	});
	$('.total-wr a').click(function (e) { 
		e.preventDefault();
		let endpoint = 'https://api.telegram.org/bot935854161:AAHwlPlRxXoXvxRS12zu18cpeDBo7g2i12U/sendMessage?chat_id=184090117&text=message';
		let endpointUrl = endpoint.replace('%message', 'asdq');
		let xhr = new XMLHttpRequest();
		xhr.open('GET', endpointUrl);
		xhr.send();
	});
	$(document).mouseup(function (e) {
		var container = $(".cart-wr");
		if (container.has(e.target).length === 0){
			container.removeClass('active');
		}
	});
	$(".more a").click(function (e) { 
		e.preventDefault();
		$('.more').show();
		$('.rolls .wrap>div:nth-child(n+9)').removeClass('show');
		let wr = $(this).closest(".rolls");
		console.log(wr.attr('id'));
		$('html, body').animate({
			scrollTop: ($("#"+wr.attr('id')).offset().top-$('.wraper > div:nth-child(1)').outerHeight())
		}, 300);
		wr.find('.wrap').find('div').addClass('show');
		wr.find('.more').hide();
	});
});