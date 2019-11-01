preShow();
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
		$('.items').append('<div><img src="'+$(this).find('img').attr("src")+'" alt=""><h3>'+$(this).data('name')+'</h3><span>'+$(this).data('price')+' грн.</span></div>');
		$('.total-line span').text(($('.total-line span').text()*1)+$(this).data('price'));
	});
	/*$('.total-wr a').click(function (e) { 
		e.preventDefault();
		let endpoint = 'https://api.telegram.org/bot935854161:AAHwlPlRxXoXvxRS12zu18cpeDBo7g2i12U/sendMessage?chat_id=184090117&text=message';
		let endpointUrl = endpoint.replace('%message', 'asdq');
		let xhr = new XMLHttpRequest();
		xhr.open('GET', endpointUrl);
		xhr.send();
	});*/
	$(document).mouseup(function (e) {
		var container = $(".cart-wr");
		if (container.has(e.target).length === 0){
			container.removeClass('active');
		}
	});
	$(".more a").click(function (e) { 
		e.preventDefault();
		$('.more').show();
		$('.rolls .wrap>div').addClass('show');
		$(".filter-wrap>a").removeClass('active');
		$(".filter-wrap>a:first-child").addClass('active');
		preShow();
		$('.rolls .filter-wrap').removeClass('show');
		let wr = $(this).closest(".rolls");
		console.log(wr.attr('id'));
		$('html, body').animate({
			scrollTop: ($("#"+wr.attr('id')).offset().top-$('.wraper > div:nth-child(1)').outerHeight())
		}, 300);
		wr.find('.filter-wrap').addClass('show');
		wr.find('.wrap').find('div').addClass('show');
		wr.find('.more').hide();
	});
	$(".filter-wrap>a").click(function (e) { 
		e.preventDefault();
		$(".filter-wrap>a").removeClass('active');
		$(this).addClass('active');
		$(this).closest('.rolls').find('.wrap>div').removeClass('show');
		let word = $(this).data('filter');
		$.each($(this).closest('.rolls').find('.wrap>div'), function (indexInArray, valueOfElement) { 
			var a = $(this).data('ingredient');
			 if(a.includes(word)){
				$(this).addClass('show');
			 }
		});
	});
});

function preShow(){
	$('.rolls .wrap>div:nth-child(n+9)').removeClass('show');
	if ($(window).width() < 1446 && $(window).width() > 1266) {
		$('.rolls .wrap>div:nth-child(n+8)').removeClass('show');
	}else if($(window).width() < 1266 && $(window).width() > 1084){
		$('.rolls .wrap>div:nth-child(n+7)').removeClass('show');
	}else if($(window).width() < 1085 && $(window).width() > 903){
		$('.rolls .wrap>div:nth-child(n+6)').removeClass('show');
	}else if($(window).width() < 901 && $(window).width() > 640){
		$('.rolls .wrap>div:nth-child(n+5)').removeClass('show');
	}else if($(window).width() < 641 && $(window).width() > 300){
		$('.rolls .wrap>div:nth-child(n+3)').removeClass('show');
	}
	
}