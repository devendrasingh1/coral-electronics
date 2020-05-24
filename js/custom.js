(function($) {
	"use strict";
	$('.nav_toggle').on('click', function(){
		$(".navigation_menu").toggleClass("menu_open");
		$(this).toggleClass("close_toggle");
	});
	//dropdown menu
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click",function(){
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	//mega menu js
	$(".mega_menu").parents("li").addClass("mega_dropdown");
	$(".mega_dropdown").prepend("<span class='mega_toggle'></span>");
	
	//mega menu js script
	var win_w = $(window).outerWidth();
	if(win_w < 992){
		$(".mega_dropdown > a").on('click', function(){
			$(this).next(".mega_menu").slideToggle(300);
			$(this).parents(".mega_dropdown").toggleClass("caret_up");
		});
		//mega dropdown menu
		$(".mega_menu .links_head").on('click', function(){
			$(this).next(".m_submenu").slideToggle(300);
			//$(this).parents(".mega_menu").show();
		});
	}
	//fix header on scroll
	var win_scroll = $(window).scrollTop();
	$(window).on('bind scroll', function(e) {
		if ($(window).scrollTop() > 500) {
			$('.c_navigation_header').addClass('fixed_menu');
		} else {
			$('.c_navigation_header').removeClass('fixed_menu');
		}	
	});
	//Brands slider
	$(".brands_slider").owlCarousel({
		singleItem:true,
		items:4,
		loop:true,
		margin:15,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:false,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			375 : {
				items: 2
			},
			600 : {
				items: 2
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3
			},
			1200 : {
				items:4
			}
		}
	});
	//Brands slider
	$(".logo_slider").owlCarousel({
		singleItem:true,
		items:5,
		loop:true,
		margin:15,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:false,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			375 : {
				items: 2
			},
			600 : {
				items: 2
			},
			768 : {
				items: 3
			},
			992 : {
				items: 4
			},
			1200 : {
				items:5
			}
		}
	});
	//Brands slider
	$(".product_slider").owlCarousel({
		singleItem:true,
		items:4,
		loop:true,
		margin:15,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:false,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			575 : {
				items: 2
			},
			768 : {
				items: 2
			},
			992 : {
				items: 2
			},
			1200 : {
				items:4
			}
		}
	});
	
	//Service slider
	$(".service_crousel").owlCarousel({
		singleItem:true,
		items:3,
		loop:true,
		margin:15,
		autoplay:false,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:false,
		nav:false,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3
			},
			1200 : {
				items:3
			}
		}
	});
    //slider
	$(".testimonial_slider").owlCarousel({
		singleItem:true,
		items:1,
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:true,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	//popup gallery js
	$('.gallery_popup').magnificPopup({
		delegate: '.gallery_icon',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'my_zoom_in',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	//load event
	$(window).on('load', function() {
		$(".ayu_loader").delay(600).fadeOut("slow");
		//triangle shape
		
	});
	//tabs Menu
	$('.tabs_menu > li').on('click', function(){
		var tab_data = $(this).attr("data-tab");
		$('.tabs_menu > li').removeClass("active");
		$(this).addClass("active");	
		$(".tab_content").removeClass("active");
		$("#"+tab_data).addClass("active");
	});
	//accordion js
	$(".accordion_heading").on("click", function(){
		$(this).toggleClass("active");
		$(this).next(".accordion_content").slideToggle(250);
		//$(".ac_heading").not(this).next().slideUp(100);
		//$(".ac_heading").not(this).removeClass("active");
	});
	//counter js
	if ($('.counter_n').length > 0){
		$('.counter_n').appear(function() {
			$('.counter_n').each(count);
			function count(options) {	
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			}
		});
	}
	//portfolio mixit js
	if ($('#technical_filter_wrap').length > 0){
		$('#technical_filter_wrap').mixItUp({
		  load: {
			sort: 'order:asc'
		  },
		  selectors: {
			target: '.mix-target',
			filter: '.filter-btn'
		  },
		  callbacks: {
			onMixEnd: function(state){
			  console.log(state)
			}
		  }
		});
	}
	//progressbar js
	$(window).on('load', function() {
		$('.skillbar_panel').appear(function() {
			$(".skillbar_panel").each(function() {
				var slide = $(this).children(".skill_slide");
				var slide_val = slide.attr("slide-value");
				var slide_text = $(this).prev(".skillbar_text").children(".skill_digit");
				slide_text.text(slide_val+'%');
				
			  //slide amimate
			 slide.animate({
				'width': slide_val+'%',
				easing: 'ease'
			  }, 3000);
			});
		});
	});
	//search bar popup in mobile
	$(".m_search_icon").on("click", function(){
		$(".search_popup").addClass("show");
	});
	//search bar popup in mobile
	$(".modal-content").on("click", function(e){
		e.stopPropagation();
	});
	//body click hide popup in mobile
	$(".search_popup").on("click", function(e){
		$(this).removeClass("show");
	});
})(jQuery);