jQuery(document).ready(function ($) {

	const breakpoints = {
		phone: 576,
		tablet: 768,
		laptop: 992,
		desktop: 1200,
		monitor: 1400
	};

	function logit(out) { console.log("> " + out) }; 

	
	gsap.registerPlugin(ScrollTrigger);


	/* Menü > */
	var navMenu = $('#main-menu');
	var menuItem = $('#main-menu a');
	var menuItemPadding = $('#main-menu a').css('padding');
	var menuAutoClose;
	var menuDisplayLong = 2;
	var menuButton = $('#menu-button');
	var menuItemMoveAmount = 20;

	//console.log('a: ' + menuItemMoveAmount);

	var toggleMenu = () => {
		if (!navMenu.hasClass('active')) {
			bringMenu();
		} else {
			hideMenu();
		}
	}

	var hideMenu = (_exceptActive) => {

		var activeItem = "." + _exceptActive;
		// TODO: menu guidance required.
		//menuItem = $('#main-menu a').not(activeItem);
		menuAutoClose = setTimeout(() => {
			TweenLite.to(menuItem, {
				duration: 0.5,
				opacity: 0,
				marginTop: menuItemMoveAmount,
				stagger: 0.1,
				ease: "power3.inOut"
			});
			navMenu.removeClass('active');
		}, menuDisplayLong *1000);
	}

	var bringMenu = (where) => {
		if (where == "top") {
			menuItemMoveAmount = menuItemPadding;
		}
		clearTimeout(menuAutoClose);
		TweenLite.to(menuItem, {
			duration: 0.5,
			opacity: 1,
			marginTop: 0,
			marginBottom: menuItemMoveAmount,
			stagger: 0.1,
			ease: "power3.inOut"
		});
		navMenu.addClass('active');
		if ($(window).width() < breakpoints.phone) {
			//menuAutoClose = setTimeout(hideMenu, menuDisplayLong *1000);
		}
	}

	menuButton.on("click", bringMenu);

	setTimeout(function () {
		if ($(window).width() < breakpoints.phone) {
			bringMenu();
		}
	}, 1500);
	
	
	// scroll to target 

	$('#logo a').click(()=>{
		var home = $('#logo a').attr('target-section');
		gsap.to( window, {duration: 1, scrollTo: home, ease: "circ.inOut"} );
	})

	$(menuItem).each( function() {
		$(this).click( () => {
			$('#main-menu a').removeClass('active');
			$(this).addClass('active');
			var target = $(this).attr('target-section');
			//logit("href: " + target);
			gsap.to( window, {duration: 1, scrollTo: target, ease: "circ.inOut"} );
		});
	});





	// hide the logo on scroll at mobile

	var firstDarkSection = $('.dark-background').eq(0);

	var hideLogoWhenScrollOnPhone = ScrollTrigger.matchMedia({
		"(max-width: 576px)": function() {
			var timeOut = 0.5;
			gsap.to("#logo", {
				opacity: 0, 
				duration: timeOut,
				pointerEvents: 'none',
				ease: "circ.Out",
				scrollTrigger: {
					start: "50px",
					toggleActions: "play none none reverse"
				}
			}).then(function(){
				gsap.to(["header", "header .flex-wrapper"], {
					height: 0, 
					duration: 0,
					delay: timeOut,
					scrollTrigger: {
						start: "50px",
						toggleActions: "play none none reverse"
					}
				});
			});			
		}
	});

	// go sticky

	var goSticky = ScrollTrigger.matchMedia({
		"(min-width: 768px)": function() {
			let headerBar = $('header .flex-wrapper');
			let darkBg = firstDarkSection.css('background-color');
			let speed = 0.15;
			
			let fdsTop = firstDarkSection.position().top;

			gsap.to(headerBar, {
				paddingTop: '1.125em',
				paddingBottom: '1.125em',
				height: "65px", 
				ease: "expo.In",
				duration: speed,
				scrollTrigger: {
					start: "50px",
					toggleActions: "play none none reverse"
				}
			});

			gsap.to('#logo .logo', {
				padding: '1.5em',
				ease: "expo.In",
				duration: speed,
				scrollTrigger: {
					start: "50px",
					toggleActions: "play none none reverse"
				}
			});

			gsap.to(headerBar, {
				backgroundColor: "#f1e7de",
				ease: "expo.In",
				duration: speed,
				scrollTrigger: {
					start: "50px",
					end: fdsTop,
					// onEnter, onLeave, onEnterBack, and onLeaveBack,
					// play pause resume reverse restart reset complete none
					toggleActions: "play none restart reverse"
				}
			});

			gsap.to(headerBar, {
				backgroundColor: darkBg,
				ease: "expo.In",
				duration: speed,
				scrollTrigger: {
					trigger: firstDarkSection,
					id: "headerBar-darkBg",
					start: "top top",
					end: "top top",
					toggleActions: "play none none reset"
				}
			});
		}
	});
	
	gsap.to([menuItem, "#logo"], {
		filter: "invert(1) brightness(0.9)",
		color: "black",
		scrollTrigger: {
			trigger: firstDarkSection,
			start: "top top",
			toggleActions: "play none none reverse"
		}
	});

	/* < Menu */








	// initial conditions

	if ($(window).innerWidth() > breakpoints.phone) {
		navMenu.addClass('active');
	}

	ScrollTrigger.addEventListener("scrollStart", () => {
		if ( $(window).innerWidth() <= breakpoints.phone ) {
			hideMenu('active');
		} 
	});


	// listener: window resized
	$(window).resize(function () {
		//logit("window was resized.");
		/* Debug > */
		//let size = $(window).outerWidth();
		//$('#debugger').html(size);
		//if (size < bp[i]) { $('#debugger').html(size + ", " + "tablet") }
		/* < Debug */

		/* Menu */
		if ($(window).innerWidth() >= breakpoints.phone) {
			//logit("ww is bigger than phone: " + $(window).innerWidth() );
			ScrollTrigger.removeEventListener("scrollStart", hideMenu, 'active');
			bringMenu("top");
			
		} else /* you are looking at the phone */ {
			ScrollTrigger.removeEventListener("scrollStart", hideMenu, 'active');
			ScrollTrigger.addEventListener("scrollStart", hideMenu, 'active');
		}

	});


	//$('.stamp').css({'left': $(window).width() - $(this).outerWidth() });

	//var stamps = $('.stamp');
	//TweenLite.to(stamps, 2, {marginTop: 0, marginLeft: (($(window).width()/2) - ($(this).outerWidth()/2)), ease: "power2"});

	/* stamps.each(function() {
		let x = ($(window).width()/2) - ($(this).outerWidth()/2);
		$(this).css({'margin-left': x});
	}); */








	// collages

	function gra(min, max) {
		return Math.random() * (max - min) + min;
	}

	collageElement = $('.collage > div');
	
	// parallax on mouse move
	
	$('.collage-wrapper').mousemove(function (e) {
		var amount = -5;
		var difference = -10;
		$(this).find('.collage div').each(function () {
			amount += difference;
			parallaxIt(e, $(this), amount);
		});
	});
	
	function parallaxIt(e, target, movement) {
		var $this = target.parents();				
		//console.log(": " + $this.attr('class'));
		var relX = e.pageX - $this.offset().left;
		var relY = e.pageY - $this.offset().top;
		
		TweenMax.to(target, 2, {
			x: (relX - $this.width() / 2) / $this.width() * movement,
			y: (relY - $this.height() / 2) / $this.height() * movement
		});
	}



	// banners

	var randomPosRatio = 20;
	var bannerDisplayLong = 2;
	var bannerChangeTime = "-=1";

	var runCollage = (_target) => {	

		var changeLayerPos = () => {
			$('.banner').css({'z-index': '-1'});
			_target.css({'z-index': '1'});
		}


		var collage = _target.find('.collage > div');
		var text = _target.find('.wrapper');
		var _timeline = gsap.timeline({ 
				repeat: 1, 
				repeatDelay: bannerDisplayLong, 
				yoyo: true 
			})
			.fromTo( collage, {
				opacity: 0,
				x: gra(-randomPosRatio, randomPosRatio),
				y: gra(-randomPosRatio / 3, randomPosRatio / 3)
			}, {
				x: 0,
				y: 0,
				opacity: 1, 
				stagger: -0.08, 
				ease: "circ.out",
				duration: .4,
				delay: -1,
				onStart: changeLayerPos
			})
			.fromTo( text, {
				opacity: 0,
			}, {
				opacity: 1,
				stagger: 0.4,
				ease: "circ.inOut",
				delay: -0.8,
				duration: .8
			}); 
			return _timeline;
	};
	
	

	var master = gsap.timeline({ repeat: -1 })
		.add(runCollage( $('.banner').eq(0) ), bannerChangeTime )
		.add(runCollage( $('.banner').eq(1) ), bannerChangeTime )
		.add(runCollage( $('.banner').eq(2) ), bannerChangeTime )
		.add(runCollage( $('.banner').eq(3) ), bannerChangeTime );

	/* var master = gsap.timeline({  })
		.add(runCollage( $('.banner').eq(3) ), bannerChangeTime ) */

	


	// companies

	var company = $('.company');
	var companyResponsive = $('.tab-slider');
	var contentSlider = $('.content-slider');

	company.addClass('hoverEffects');
	company.click(function(){ company.removeClass('hoverEffects') });

	companyResponsive.slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		draggable: false,
		swipeToSlide: false,
		swipe: false,
		fade: true,
		dots: false
	});

	$('.light-bulbs ').on('click', '.bulb', function () {
		$('.bulb').removeClass('active');
		$(this).addClass('active');
		companyResponsive.slick('slickGoTo', $(this).index());
		//console.log( $(this).index() );
	});

	contentSlider.slick({
		// lazyLoad: 'ondemand',
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		dots: false,
		draggable: false,
		autoplay: true,
		//centerMode: true,
		speed: 500,
		autoplaySpeed: 2000,
		variableWidth: true
	});

	company.on('click', function () {
		company.removeClass('enlarge').addClass('flap');
		$(this).removeClass('flap').addClass('enlarge');
		contentSlider.slick('slickPause');
		$(this).find('.content-slider').slick('slickPlay');
	});
	// company.removeClass('enlarge').addClass('flap');
	// company.eq(0).removeClass('flap').addClass('enlarge');





	//statistics

	var statValues = $('.statistics .value');
	//console.log(statValues);

	gsap.from(statValues, {
		scrollTrigger: {
			trigger: statValues,
			toggleActions: "play none none none"
		},
		textContent: 1,
		duration: 2,
		ease: Power4.easeInOut,
		snap: { textContent: 1 },
		stagger: 0,
		// onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
	});


	// projects

	$('.project-slider').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: true,
					dots: false
				}
			}
		]
	});

	$('.projects-list').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		draggable: false,
		swipeToSlide: false,
		swipe: false,
		fade: true,
		adaptiveHeight: true,
		dots: false
	});

	$('.project-thumbnails').on('click', '.thumbnail', function () {
		$('.projects-list').slick('slickGoTo', $(this).index());
		gsap.to(window, {scrollTo: "#Projects", duration: .5, ease: "expo.inOut"});
	});




	$('.board-members').slick({
		// lazyLoad: 'ondemand',
		slidesToShow: 3,
		infinite: true,
		arrows: true,
		dots: false,
		autoplay: true,
		centerMode: true,
		speed: 2000, 
		autoplaySpeed: 4000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});

	//gsap.to(window, { duration: .5, scrollTo: { y: 0, x: 0 }, ease: "power2" });

}); // jquery