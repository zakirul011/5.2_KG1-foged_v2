(function ($) {
	"use strict";

	// js
	const featureCateLink = document.querySelectorAll('.feature-tab-links ul li')
	const featureSingleTab = document.querySelectorAll('.feature-single-tab')

	let counterCate = 0;
	let indentifire = 0;

	featureCateLink.forEach((link, index) => {
		link.parentElement.parentElement.style.height = link.clientHeight * 3 + 'px';
		
		link.addEventListener('click', ()=>{
			if (indentifire > index && index > 0 && index < featureCateLink.length - 2) {
				counterCate--
			} else if(indentifire == index){
				counterCate = counterCate
			} else if(indentifire < index && index > 1 && index < featureCateLink.length - 1){
				counterCate++ 
			}
			link.parentElement.style.transform = `translateY(-${link.clientHeight * counterCate}px)`;
			
			for (let i = 0; i < featureCateLink.length; i++) {
				featureCateLink[i].classList.remove('active')
			}
			for (let i = 0; i < featureSingleTab.length; i++) {
				featureSingleTab[i].classList.remove('active')
			}
			link.classList.add('active');
			featureSingleTab[index].classList.add('active');

			indentifire = index;

		})
	});

	/*=========================
	feature-slider-1
	===========================*/
	$('.feature-slider-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-nav-1',
	 });
	 
	 $('.feature-nav-1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-slider-1',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		}
		]
	 });

	/*=========================
	feature-slider-2
	===========================*/
	$('.feature-slider-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-nav-2',
	 });
	 
	 $('.feature-nav-2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-slider-2',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		}
		]
	 });

	/*=========================
	feature-slider-3
	===========================*/
	$('.feature-slider-3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-nav-3',
	 });
	 
	 $('.feature-nav-3').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-slider-3',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		}
		]
	 });

	/*=========================
	feature-slider-4
	===========================*/
	$('.feature-slider-4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-nav-4',
	 });
	 
	 $('.feature-nav-4').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-slider-4',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		}
		]
	 });

	/*=========================
	feature-slider-5
	===========================*/
	$('.feature-slider-5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-nav-5',
	 });
	 
	 $('.feature-nav-5').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-slider-5',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		}
		]
	 });


	// dealer input placeholder
	const dealerInput = document.querySelectorAll('.dealer-form-input input, .dealer-form-input textarea, .sponsorship-input input, .sponsorship-payment-input input, .sponsorship-input textarea')

	dealerInput.forEach(input => {
		if (input.value != '') {
			input.parentElement.classList.add('active')
		}
		input.addEventListener('focus', ()=>{
			input.parentElement.classList.add('active')
		})
		input.addEventListener('focusout', ()=>{
			if (input.value == '') {
				input.parentElement.classList.remove('active')
			}
		})
	});

	// faq-page-tab
	const faqPageNavs = document.querySelectorAll('.faq-page-navs ul li')
	const faqPageContent = document.querySelectorAll('.faq-page-content')

	faqPageNavs.forEach((nav, index) => {
		nav.addEventListener('click', ()=>{
			for (let i = 0; i < faqPageNavs.length; i++) {
				faqPageNavs[i].classList.remove('active')
			}
			for (let i = 0; i < faqPageContent.length; i++) {
				faqPageContent[i].classList.remove('active')
			}
			
			nav.classList.add('active')
			faqPageContent[index].classList.add('active')
		})
	});

	// faq page accordings
	const faqPageBoxTitle = document.querySelectorAll('.faq-page-box-title')

	faqPageBoxTitle.forEach(title => {

		// shop active faq body
		if (title.parentElement.classList.contains('active-box')) {
			title.parentElement.children[1].style.maxHeight = title.parentElement.children[1].scrollHeight + 'px'
		}
		title.addEventListener('click', ()=>{
			let faqBox = title.parentElement;
			let faqbody = title.nextElementSibling;

			// toogle class on click
			if (faqBox.classList.contains('active-box')) {
				faqBox.classList.remove('active-box')
			}else{
				faqBox.classList.add('active-box')
			}
	
			// colps animaion
			if (faqbody.style.maxHeight) {
				faqbody.style.maxHeight = null
			} else {
				faqbody.style.maxHeight = faqbody.scrollHeight + 'px'
			}

		})

	});



	// popup search
	const searchIcon = document.querySelectorAll('.search-icon, .popup-search-close, .popup-search-overlay')
	const popupSearchModal = document.querySelector('.popup-search-modal')

	searchIcon.forEach(icon => {
		icon.addEventListener('click', (e)=>{
			e.preventDefault();
			popupSearchModal.classList.toggle('active')
		})
	});

	



	   // account page-tab
		const accountTabLinks = document.querySelectorAll('.account-tab-link')
		const accountTabItems = document.querySelectorAll('.account-tab-item')
	
		accountTabLinks.forEach((link, index) =>{
			link.addEventListener('click', ()=> {
				for (let i = 0; i < accountTabLinks.length; i++) {
					accountTabLinks[i].classList.remove('active')
				}
				for (let i = 0; i < accountTabItems.length; i++) {
					accountTabItems[i].classList.remove('active')
				}
				link.classList.add('active')
				accountTabItems[index].classList.add('active')
			})
		})


		// pass show hide
		const accountPassIcons = document.querySelectorAll('.account-pass-input span')

		accountPassIcons.forEach(icon => {
			icon.addEventListener('click', ()=>{
				if (icon.parentElement.children[0].getAttribute("type") == 'password') {
					icon.parentElement.children[0].setAttribute("type", "text")
				}else{
					icon.parentElement.children[0].setAttribute("type", "password")
				}
				for (let i = 0; i < icon.parentElement.children.length; i++) {
					icon.parentElement.children[i].classList.remove('active')
				}
				icon.classList.add('active')
				
			})
		});



	// toggle class
	const colorPanelList = document.querySelectorAll('.color-panel-list ul li')
	colorPanelList.forEach(color => {
		color.addEventListener('click', ()=>{
			color.classList.toggle('active')
		})
	});

	// change active class to shop reponsive tab
	const shopMenuTitle = document.querySelectorAll('.shop-menu-title h5')
	shopMenuTitle.forEach(title => {
		title.addEventListener('click', ()=>{
			title.parentElement.classList.toggle('active')
		})
	});
	

	// change active class like menu
	changeActive(document.querySelectorAll('.shop-sizes ul li, .lugs-item span, .product-size-item span, .categories-item ul li, .color-name-list ul li'))
	function changeActive(items) {
		items.forEach(item =>{
			item.addEventListener('click', ()=>{
				for (let i = 0; i < item.parentElement.children.length; i++) {
					item.parentElement.children[i].classList.remove('active')
				}
				item.classList.add('active')
			})
		})
	}

	// hamberger
	const hambergerIcon = document.querySelectorAll('.hamberger-icon')
	hambergerIcon.forEach(icon => {
		icon.addEventListener('click', ()=>{
			document.querySelector('.humber-menu').classList.toggle('active')
			icon.classList.toggle('active')
		})
	});



		//when click 3d btn reload the 3d img
		const imgModalWrap = document.querySelectorAll('.img-modal-wrap')
		const threeD = document.querySelectorAll('.model-btn')

		threeD.forEach(btn => {
			btn.addEventListener('click', ()=>{
				// modalItem.src = 'cap_XR.297.html'

				// imgModalWrap.forEach(modal => {
				// 	modal.insertAdjacentHTML('beforeend','<iframe src="cap_XR.297.html" allowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;" frameborder="0" scrolling="no"></iframe>');
				// });

				// const modalItem = document.querySelector('.img-modal-wrap iframe')
				// modalItem.addEventListener('load',()=>{
				// 	document.querySelector('.img-modal-wrap .preloader2').style.display = 'none';
				// })

				setInterval(function () {
					
					$('.threeD-active-slider').slick({
						arrows: true,
						prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
						nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
					});

				}, 200)

				// $('.threeD-active-slider').slick({
				// 	arrows: true,
				// 	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
				// 	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
				// });


			})
		});




		// Add class to FAQ tab
		window.addEventListener('load', ()=>{

			$(".collapse.show").each(function () {
				$(this).prev(".card-header").parent('.card').addClass('active-aco')
			});
		
			// Toggle on show hide of collapse element
			$(".collapse").on('show.bs.collapse', function () {
				$(this).prev(".card-header").parent('.card').addClass('active-aco')
			}).on('hide.bs.collapse', function () {
				$(this).prev(".card-header").parent('.card').removeClass('active-aco')
			});
		})
	


		// sticky
		var wind = $(window);
		var sticky = $('.header-area');
		wind.on('scroll', function () {
			var scroll = wind.scrollTop();
			if (scroll < 100) {
				sticky.removeClass('sticky');
			} else {
				sticky.addClass('sticky');
			}
		});

	//ratting star get prev active onclick
	activePrevItem(document.querySelectorAll('.shop-single-add-review-wrap .ratting ul li'))
	function activePrevItem(items) {
		items.forEach((item, index) =>{
			item.addEventListener('click', ()=>{
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('active')
					
				}
				for (let i = 0; i < index + 1; i++) {
					items[i].classList.add('active')
				}
			})
		})
	}


	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul, .footer-menu ul').onePageNav({
		scrollOffset: top_offset,
	});

	//active wheel feature dots box
	wheelFeatureBox(document.querySelectorAll('.wheel-feature-dots a'), document.querySelectorAll('.wheel-feature-box'))
	function wheelFeatureBox(links, items) {
		links.forEach((link,index) =>{
			link.addEventListener('click', ()=>{
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('active')
				}
				items[index].classList.add('active')
			})
		})
	}
	
	// smooth-scroll
	$('.shop-single-desc-menu ul li a, .ratting-text a, .wheel-feature-dots a, .forging-tab-links ul li a').bind('click', function(event){
		var $anchor = $(this);
		var headerH = '100';
		$('html, body').stop().animate({
			 scrollTop  : $($anchor.attr('href')).offset().top - headerH + "px"
		}, 700, 'easeInSine');
		event.preventDefault();
  });

	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	// magnificPopup img view /
	$(".quick-image").magnificPopup({
		type: 'image'
	});
	// magnificPopup img view /
	$(".quick-view, .shop-zoom-img").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});
	// magnificPopup img view /
	$(".shop-single-view").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});
	// magnificPopup img view /
	$(".shop-product-quick-view").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});
	// magnificPopup img view /
	$(".upload-custom-view").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});
	// magnificPopup img view /
	$(".header-img").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});
	// magnificPopup img view /
	$(".feature-gallery-view").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});
	// magnificPopup img view /
	$(".gallery-page-quick").magnificPopup({
			type: "image",
			gallery: {
			enabled: true,
			},
	});


	/*=========================
	Hero-slider SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-hero-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-hero-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 7000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();


	/*=========================
	upload-custom-active-slider
	===========================*/
	$('.upload-custom-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '30%',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 992,
				settings: {
					centerPadding: '25%',
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0',
				}
			}
		]

	});

	/*=========================
	gallery-active-slider
	===========================*/
	$('.gallery-active-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	responsive-upload-gallery
	===========================*/
	$('.responsive-upload-gallery').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	});


	/*=========================
	testimonial-active-slider
	===========================*/
	$('.testimonial-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	/*=========================
	concave-active-slider
	===========================*/
	$('.concave-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0px',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});



	/*=========================
	work-active-slider
	===========================*/
	$('.work-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});


	/*=========================
	dually-active-slider
	===========================*/
	$('.dually-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	about-page-choose-slider
	===========================*/
	$('.about-page-choose-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		asNavFor: '.about-page-choose-slider-navs'
	});
	
	$('.about-page-choose-slider-navs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.about-page-choose-slider',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
	 });




	/*=========================
	about-page-testimonial-slider
	===========================*/
	$('.about-page-testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	});

	/*=========================
	promo-active-slider
	===========================*/
	$('.promo-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	});

	/*=========================
	forging-active-slider
	===========================*/
	$('.forging-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	});


/*=========================
	shop-single-detail-active-slider-slider
	===========================*/
	$('.shop-single-detail-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.shop-single-detial-slider-navs'
	 });
	 
	 $('.shop-single-detial-slider-navs').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.shop-single-detail-active-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				vertical: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				vertical: false,	
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		}
	]
	 });


	/*<===isotop==>*/
	//change the active class on btn
	$('.gallery-page-items').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.gallery-page-items').isotope({
			itemSelector: '.gallery-page-items > div',
		});
		// filter items on button click
		$('.gellery-page-btns ul li').on( 'click', function() {
			
			$('.gellery-page-btns ul li').removeClass('active')
			$(this).addClass('active')

			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		})
	});

	 



   // niceSelect
   $('select').niceSelect();

   // datepicker
   $('.sponsorship-date input, #spons-date2').datepicker();


	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	// yoo
	YooZoom(
		document.querySelectorAll(".yoo-zoom"),    //zoom container
		2,    // zoom scale (recommended 2)
	);

	function YooZoom(zContainer, zScale) {
		if (zScale > 1) {
			zContainer.forEach(countainer => {

				// get zoom-in on hover
				countainer.addEventListener("mousemove", (e) => {
					let zImg = countainer.children[0];
					let xAxis = e.pageX - countainer.getBoundingClientRect().left - countainer.getBoundingClientRect().width / 2;
					let yAxis = e.pageY - countainer.getBoundingClientRect().top - window.pageYOffset - countainer.getBoundingClientRect().height / 2;
					zImg.style.transform = 'translate(' + -xAxis * (zScale - 1) + 'px,' + -yAxis * (zScale - 1) + 'px) scale(' + zScale + ')';
					zImg.style.opacity = 1;
				});
				// get back zoom-out on hover out
				countainer.addEventListener("mouseout", (e) => {
					let zImg = countainer.children[0];
					zImg.style.transform = `translate(0) scale(1)`;
					zImg.style.opacity = 0;
				});
			});
		}
	}
	

	// quick modal
	const quickModalArea = document.querySelector('.quick-modal-area')
	const quickModalBtn = document.querySelectorAll('.quick-modal-btn')
	const quickModalClose = document.querySelectorAll('.quick-modal-overlay, .quick-modal-close span')

	quickModalBtn.forEach(btn => {
		btn.addEventListener('click', (e)=>{
			e.preventDefault();
			quickModalArea.classList.add('active')
		})
	});
	quickModalClose.forEach(btn => {
		btn.addEventListener('click', (e)=>{
			e.preventDefault();
			quickModalArea.classList.remove('active')
		})
	});
	
	// niceScroll
	$(".location-info").niceScroll({
		cursorcolor:"var(--theme-color)",
		cursorwidth:"10px",
		background:"#fff",
		cursorborder:"1px solid var(--theme-color)",
		cursorborderradius: '10px',
		autohidemode:'leave'
	 }); 
	// niceScroll
	$("#tarmModal .modal-body").niceScroll({
		cursorcolor:"var(--theme-color)",
		cursorwidth:"10px",
		background:"#fff",
		cursorborder:"1px solid var(--theme-color)",
		cursorborderradius: '10px',
		autohidemode:'leave'
	 }); 



	 const sponsorshipfile = document.querySelectorAll('.sponsorship-file input')
	 sponsorshipfile.forEach(input => {
		input.addEventListener('change', ()=>{
			document.querySelector('.sponsorship-file label div').innerHTML = input.files[0].name
		})
	 });


	 const singleFeatureNav = document.querySelectorAll('.single-feature-nav')
	 singleFeatureNav.forEach(nav => {
		if (nav.parentElement.children.length <= 3) {
			for (let i = 0; i < nav.parentElement.children.length; i++) {
				nav.parentElement.children[i].classList.remove('slick-center')
			}
			nav.parentElement.children[0].classList.add('slick-center')
			nav.addEventListener('click', ()=>{
				for (let i = 0; i < nav.parentElement.children.length; i++) {
					nav.parentElement.children[i].classList.remove('slick-center')
				}
				nav.classList.add('slick-center')
			})
		}
	 });





	/* shop-single-v2 accordion */
	// faq-tab
	const faqLink = document.querySelectorAll('.faq-header')

	faqLink.forEach(link => {
		if (link.parentElement.classList.contains('active')) {
			link.parentElement.children[1].style.maxHeight = link.parentElement.children[1].scrollHeight + "px"
		}
		link.addEventListener('click', ()=>{
			if (link.parentElement.classList.contains('active')) {
					link.parentElement.classList.remove('active')
					link.nextElementSibling.style.maxHeight = null
			}else{
				link.parentElement.classList.add('active')
				link.nextElementSibling.style.maxHeight = link.nextElementSibling.scrollHeight + "px"
			}

		})
	});

	
/*=========================
	single-shop-detaild-active-slider-v2
	===========================*/
	$('.single-shop-detaild-active-slider-v2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.single-shop-detaild-nav-v2'
	 });
	 
	 $('.single-shop-detaild-nav-v2').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.single-shop-detaild-active-slider-v2',
		dots: false,
		focusOnSelect: true,
		vertical: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-down"></i></button>',
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				vertical: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				vertical: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				vertical: false,	
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		}
	]
	 });



	/*=========================
	single-shop-rim-active-slider
	===========================*/
	$('.single-shop-rim-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	

	/*=========================
	Hero-slider SLIDER JS v2
	===========================*/
	const heroIndecator = document.querySelectorAll('.hero-slider-indecator');
	const heroMainSlider = document.querySelector('.hero-area-v2 .hero-active-slider')
  
	heroIndecator.forEach(indecator => {
		
		indecator.children[1].children[0].innerHTML = heroMainSlider.children.length;

		$('.hero-area-v2 .hero-active-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			indecator.children[0].innerHTML = nextSlide + 1;
			console.log(nextSlide);
		});

	});

	function heroSlider() {
		var BasicSlider = $('.hero-area-v2 .hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-hero-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-hero-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 7000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();





	// collectionNavItem

		// smooth-scroll
		$('.collecion-navs ul li a').bind('click', function(event){
			var $anchor = $(this);
			var headerH = '100';
			$('html, body').stop().animate({
				 scrollTop  : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 700, 'easeInSine');
			event.preventDefault();
	  });

	  // reverse-JS
	$('.collection-tab:nth-child(even)').addClass('reverse-item');

	const collectionNavItem = document.querySelectorAll('.collection-nav-item')
	const collectionTab = document.querySelectorAll('.collection-tab')


	collectionNavItem.forEach((link, index) => {
		link.addEventListener('click', (e)=>{
			e.preventDefault();
			for (let i = 0; i < collectionNavItem.length; i++) {
				collectionNavItem[i].classList.remove('active')
				collectionTab[i].classList.remove('active')
			}

			link.classList.add('active')
			collectionTab[index].classList.add('active')
		})
	});




})(jQuery);

