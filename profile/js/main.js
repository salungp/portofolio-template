$(document).ready(function () {
    'use strict';

	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('nav');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('change-nav');
		} else {
			menu_area.removeClass('change-nav');
		}
    });
    
    $(window).on('scroll', function () {
        var menu_area = $('.a');
        if ($(window).scrollTop() > 200) {
            menu_area.css({"color" : "#333"});
        } else {
            menu_area.css({"color" : "#fff"});
        }
    });

    $(window).on('scroll', function () {
        var menu_area = $('.logo');
        if ($(window).scrollTop() > 200) {
            menu_area.css({"color" : "#333"});
        } else {
            menu_area.css({"color" : "#fff"});
        }
    });

    // create sticky navbar
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) { 
            $(".nav").addClass("nav-change");
        }
        else {
            $(".nav").removeClass("nav-change");
        }
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $(".nav-text").css({ "color": "#333" });
        }
        else {
            $(".nav-text").css({ "color": "#fff" });
        }
    });


    //*********** /show sidebar
    $(document).ready(function () {
        $(".toggle-btn").click(function () {
            $("nav").toggleClass("active");
        })
    });


	//*********** scrollspy js

	$('body').scrollspy({
		target: 'nav',
		offset: 195
	});


	//************ smooth scroll js

	$('.a,.down').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

	//***** Skill bar js

	var skillbar = $(".skill-box");

	skillbar.waypoint(function () {
		skillbar.each(function () {
			$(this).find(".bar").animate({
				width: $(this).data("percent")
			}, 1000);
		});
	}, {
		offset: "80%"
	});

	
    
    
    //************ Magnific Popup
    

    $('.zoom,.zoom1').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	
    
    //*************** Isotope filter

    var $Container = $('.img-filter');
    if( $Container.length>0 ) {
        $Container.isotope({
            itemSelector: '.single-port',
            transitionDuration: '0.8s'
        });
        $(".img-filter").on("click", function (e){
            $(".img-filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $Container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function(){
            setTimeout(function(){
                $Container.isotope();
            },1000);
        }).trigger('resize');
    }



    //*************counter-up js

    $('.counter').counterUp({
        delay: 50,
        time: 8000
    });




    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

// set animation on scroll
    AOS.init({ duration: 1100 });

});