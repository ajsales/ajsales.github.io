document.cookie = 'same-site-cookie=foo; SameSite=Lax';

$(document).ready(function(){

	//Loading animations prep
	$('.navbar').hide();
	$('.navbar-brand, .nav-link, .jumbotron h1').css({
		opacity: '0',
	});
	$('.jumbotron p').hide();
	$('.job-description').css({
		opacity: '0',
	});
	$('.card-img-overlay').css({
		opacity: '0',
	});
	$('.card-img-overlay hr, .card-img-overlay h3, .card-img-overlay p').hide();


	//Loading animations
	$('.navbar').slideDown(800, function() {
		$('.navbar-brand').animate({
			opacity: '1',
		}, function() {
			$('.nav-link').animate({
			opacity: '1',
			});
		});
	});

	$('.jumbotron h1').animate({
		opacity: '1',
	}, 800, function() {
		$('.jumbotron p').slideDown(800);
	});


	//Interactive animations
	$('.portfolio .card').on('mouseenter', function() {
		$(this).find('.card-img-overlay').animate({
			opacity: '0.75',
		}, 300, function () {
			$(this).find('p, h3').fadeIn();
			$(this).find('hr').slideDown(500);
		});
	}).on('mouseleave', function() {
		$(this).find('.card-img-overlay').animate({
			opacity: '0',
		}, 300, function () {
			$(this).find('p, h3').fadeOut();
			$(this).find('hr').slideUp(500);
		});
	});

	$('.contact a').on('mouseenter', function() {
		$(this).find('svg').css({
			fill: '#343c65'
		});
		$(this).find('svg').find('g').css({
			fill: '#343c65'
		});
	}).on('mouseleave', function() {
		$(this).find('svg').css({
			fill: '#fff'
		});
		$(this).find('svg').find('g').css({
			fill: '#fff'
		});
	});

});