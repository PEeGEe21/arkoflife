new WOW().init();
AOS.init();

$(function () {
  'use strict';

  /*
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });
*/

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // :: 5.0 Sliders Active Code
  if ($.fn.owlCarousel) {
    var welcomeSlide = $('.hero-slides');
    var aboutSlide = $('.about-slides');
    var donateSlide = $('.donate-slides');

    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
    });

    welcomeSlide.on('translate.owl.carousel', function () {
      var slideLayer = $('[data-animation]');
      slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this)
          .removeClass('animated ' + anim_name)
          .css('opacity', '0');
      });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
      var slideLayer = welcomeSlide
        .find('.owl-item.active')
        .find('[data-animation]');
      slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this)
          .addClass('animated ' + anim_name)
          .css('opacity', '1');
      });
    });

    $('[data-delay]').each(function () {
      var anim_del = $(this).data('delay');
      $(this).css('animation-delay', anim_del);
    });

    $('[data-duration]').each(function () {
      var anim_dur = $(this).data('duration');
      $(this).css('animation-duration', anim_dur);
    });

    var dot = $('.hero-slides .owl-dot');
    dot.each(function () {
      var index = $(this).index() + 1 + '.';
      if (index < 10) {
        $(this).html('0').append(index);
      } else {
        $(this).html(index);
      }
    });
  }

  // magnific popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    //fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      //verticalFit: true
    },
    zoom: {
      enabled: false,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  /*
						jQuery('.magnific-image').magnificPopup({ 
							delegate: '.magnific-anchor', 
							type: 'image',
							closeOnContentClick: true,
							closeBtnInside: true,
							//fixedContentPos: true,
							tLoading: 'Loading image #%curr%...',
							mainClass: 'magnific-img-mobile', 
							gallery: {
								enabled: true,
								navigateByImgClick: true,
								preload: [0,1] // Will preload 0 - before current, and 1 after the current image
							},
							image: {
								//verticalFit: true,
								tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
								titleSrc: function(item) {
									return item.el.attr('title') + '<small></small>';
								}
							}
						});
					*/

  $('#searchToggler').on('click', function (e) {
    e.preventDefault();
    $(this).find('.fa-search, .fa-times').toggleClass('d-none');
    $('#search').toggleClass('active');
  });

  $('.link-scroll').bind('click', function (e) {
    var anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr('href')).offset().top + 2,
        },
        1500
      );
    e.preventDefault();
  });

  $(document).on('click', '.scroll', function (event) {
    event.preventDefault();

    var href = $.attr(this, 'href');

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 70,
      },
      1500,
      function () {
        // window.location.hash = href;
      }
    );
  });
});
/*
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	var data = document.getElementById("d_a");
	
	today = yyyy;
	document.write(today);
		



	
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1000);

	
*/

var scrollbtn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			scrollbtn.addClass('show').fadeIn(1000);
		}else{
			scrollbtn.removeClass('show').fadeOut(1000);
		}
	});

	scrollbtn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 70
		}, 800);
	});

// var btn = $('#button');

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show').fadeIn(1000);
//   } else {
//     btn.removeClass('show').fadeOut(1000);
//   }
// });

// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, 500);
// });

jQuery(document).ready(function ($) {
  $('.fadeOut').owlCarousel({
    items: 4,

    //animateOut: 'fadeOut',
    loop: true,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 8000,
    navSpeed: 1000,
    paginationSpeed: 1000,
    slideSpeed: 1000,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      650: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });
});
jQuery(document).ready(function ($) {
  $('.header-carousel').owlCarousel({
    animateOut: 'slideOutLeft',
    animateIn: 'fadeIn',
    center: true,
    autoplay: true,
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplaySpeed: 1000,
    navSpeed: 1000,
    paginationSpeed: 1000,
    slideSpeed: 1000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 1.5,
      },
      1024: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
});

jQuery(document).ready(function () {
  $('.md-selectpicker').selectpicker();
});

$(document).on('click', '#btnBlock', function () {
  $.blockUI({
    message: null,
    overlayCSS: {
      backgroundColor: '#fff',
      opacity: 0.2,
    },
    css: {
      border: 'none',
      padding: '15px',

      backgroundColor: '#000',
      '-webkit-border-radius': '0px',
      '-moz-border-radius': '0px',
      opacity: 0.8,
      color: '#fff',
    },
  });
  setTimeout($.unblockUI, 2000);
});

/* 
$(document).ready(function (){
    $('.header-carousel').owlCarousel({

        /* center: true, 
        autoplay:true,
        items:1,
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        /* responsive:{
            0:{
                items:1
            },
            650:{
                items:1.5
            },			
            1024:{
                items:2
            },
            1200:{
                items:2
            }
        }  */

/* jQuery(document).ready(function (){
    jQuery('.owl-carousel').owlCarousel()
    }); */
/* center: true,
                autoplay:true,
                items:3,
                loop:true,
                margin:0,
                nav:false,
                dots:true,
                autoplaySpeed: 1000,
                navSpeed: 1000,
                paginationSpeed: 1000,
                slideSpeed: 1000,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    650:{
                        items:1.5
                    },			
                    1024:{
                        items:2
                    },
                    1200:{
                        items:2
                    }
                } */
