//   all ------------------
function initSolonick() {
    "use strict";
    //   loader ------------------
    jQuery(".pin").text("Loading");

    jQuery(".loader-wrap").fadeOut(300, function() {
        jQuery("#main").animate({
            opacity: "1"
        }, 300);
    });

    //   Background image ------------------
    var a = jQuery(".bg");
    a.each(function(a) {
        if (jQuery(this).attr("data-bg")) jQuery(this).css("background-image", "url(" + jQuery(this).data("bg") + ")");
    });
    //   clone ------------------
    jQuery.fn.duplicate = function(a, b) {
        var c = [];
        for (var d = 0; d < a; d++) jQuery.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    jQuery("<div class='container full-height'></div>").appendTo(".sec-lines");
    jQuery("<div class='line-item'></div>").duplicate(5).appendTo(".sec-lines .container");

    jQuery("<div class='half-bg-dec-item'></div>").duplicate(12).appendTo(".half-bg-dec");
    jQuery("<div class='hidden-works-item-dec'><i class='fal fa-arrow-left'></i></div>").appendTo(".hidden-works-item");
    var cr2 = jQuery(".card-popup-rainingvis");
    cr2.each(function(cr) {
        var starcount2 = jQuery(this).attr("data-starrating2");
        jQuery("<i class='fas fa-star'></i>").duplicate(starcount2).prependTo(this);
    });
    //   hero parallax hover ------------------

    function heroAnim() {
        function a(a) {
            var b = a.length,
                c, d;
            while (b) {
                d = Math.floor(Math.random() * b--);
                c = a[b];
                a[b] = a[d];
                a[d] = c;
            }
            return a;
        }
        var b = jQuery(".half-bg-dec-item");
        jQuery(a(b).slice(0, jQuery(".half-bg-dec").data("ran"))).each(function(a) {
            var bc = jQuery(this);
            b.removeClass("half-bg-dec-vis")
            bc.addClass("half-bg-dec-vis");

        });
    }
    setInterval(function() {
        heroAnim();
    }, 2000);

    //   parallax thumbnails position  ------------------
    jQuery(".bg-parallax-module").each(function() {
        var tcp = jQuery(this),
            dpl = tcp.data("position-left"),
            dpt = tcp.data("position-top");
        tcp.css({
            "top": dpt + "%"
        });
        tcp.css({
            "left": dpl + "%",
        });
    });
    jQuery(".album-thumbnails div").each(function() {
        var dp2 = jQuery(this).data("position-left2"),
            dpt2 = jQuery(this).data("position-top2");
        jQuery(this).css({
            "top": dpt2 + "%"
        });

        jQuery(this).css({
            "left": dp2 + "%",
        });
    });
    jQuery(".section-subtitle").fitText(0.85);
    //   scrollToFixed  ------------------


    jQuery(".scroll-nav-wrap").scrollToFixed({
        minWidth: 569,
        zIndex: 12,
        preUnfixed: function() {
            jQuery(this).css("margin-top", "0");
        },
        preFixed: function() {
            if (jQuery(window).width() < 1064) jQuery(this).css("margin-top", "80px");
        }
    });



    //   slick  ------------------
    var sbp = jQuery(".sp-cont-prev"),
        sbn = jQuery(".sp-cont-next"),
        ccsi = jQuery(".cur_carousel-slider-container"),
        scw = jQuery(".slider-carousel-wrap"),
        fetcarCounter = jQuery(".fet_pr-carousel-counter"),
        fpr = jQuery('.fet_pr-carousel');
    jQuery('.text-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerPadding: "0",
        centerMode: true,
        responsive: [{
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]

    });



    fpr.on("init", function(event, slick) {
        fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    fpr.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        slickCurrentSlide: 2,
        centerPadding: "0",
        centerMode: true,
        responsive: [{
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                }
            },

            {
                breakpoint: 1084,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]

    });
    fpr.on("afterChange", function(event, slick, currentSlide) {
        fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    sbp.on("click", function() {
        jQuery(this).closest(scw).find(ccsi).slick('slickPrev');
    });
    sbn.on("click", function() {
        jQuery(this).closest(scw).find(ccsi).slick('slickNext');
    });

jQuery('.image-popup').click(function (e) { 
    e.preventDefault();
    jQuery(jQuery(this).attr('href')).arcticmodal();
});



    //   appear------------------
    jQuery(".stats").appear(function() {
        jQuery(".num").countTo();
    });







    jQuery(".piechart-holder").appear(function() {
        jQuery(this).find(".chart").each(function() {
            var cbc = jQuery(".piechart-holder").attr("data-skcolor");
            jQuery(".chart").easyPieChart({
                barColor: cbc,
                trackColor: "#eee",
                scaleColor: "#eee",
                size: "150",
                lineWidth: "40",
                lineCap: "butt",
                animate: 3500,
                easing: "easeInBounce",
                onStep: function(a, b, c) {
                    jQuery(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    jQuery(".skillbar-box").appear(function() {
        jQuery(this).find("div.skillbar-bg").each(function() {
            jQuery(this).find(".custom-skillbar").delay(600).animate({
                width: jQuery(this).attr("data-percent")
            }, 1500);
        });
    });











    //footer animation ------------------
    var n = jQuery(".partcile-dec").data("parcount");
    jQuery(".partcile-dec").jParticle({
        background: "rgba(255,255,255,0.0)",
        color: "rgba(255,255,255,0.081)",
        particlesNumber: n,
        particle: {
            speed: 20
        }
    });
    //   accordion ------------------



    jQuery('.cs-wrap .hero-wrap , .nav-holder').perfectScrollbar({});


    //   Contact form------------------
    jQuery("#contactform").submit(function() {
        var a = jQuery(this).attr("action");
        jQuery("#message").slideUp(750, function() {
            jQuery("#message").hide();
            jQuery("#submit").attr("disabled", "disabled");
            jQuery.post(a, {
                name: jQuery("#name").val(),
                email: jQuery("#email").val(),
                phone: jQuery("#phone").val(),
                subject: jQuery('#subject').val(),
                comments: jQuery("#comments").val(),
                verify: jQuery('#verify').val()

            }, function(a) {
                document.getElementById("message").innerHTML = a;
                jQuery("#message").slideDown("slow");
                jQuery("#submit").removeAttr("disabled");
                if (null != a.match("success")) jQuery("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    jQuery("#contactform input, #contactform textarea").keyup(function() {
        jQuery("#message").slideUp(1500);
    });



    // Share   ------------------
    jQuery(".share-container").share({
        networks: ['facebook', 'pinterest', 'googleplus', 'twitter', 'linkedin']
    });
    var shrcn = jQuery(".share-wrapper"),
        ssb = jQuery(".showshare");

    function showShare() {
        hideMenu();
        shrcn.fadeIn(1).removeClass("isShare").addClass("invis-share");
        jQuery(".share-title span").shuffleLetters({});
        ssb.addClass("clshbt");
        setTimeout(function() {
            jQuery(".soa").each(function(a) {
                var b = jQuery(this);
                setTimeout(function() {
                    b.addClass("soavis")
                }, 150 * a);
            });

        }, 300);
    }

    function hideShare() {
        shrcn.fadeOut(400).addClass("isShare").removeClass("invis-share");
        jQuery(".soa").removeClass("soavis");
        ssb.removeClass("clshbt");
    }
    jQuery(".close-share").on("click", function() {
        hideShare();
    });
    ssb.on("click", function() {

        if (shrcn.hasClass("isShare")) showShare();
        else hideShare();
        return false;
    });
    //   menu ------------------
    jQuery("#menu").menu();
    jQuery(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
    var nbw = jQuery(".nav-button"),
        nhw = jQuery(".nav-holder"),
        nho = jQuery(".nav-overlay");

    function showMenu() {
        hideShare();
        nho.fadeIn(500);
        nhw.animate({
            left: "0",
            opacity: 1
        }, {
            queue: false,
            duration: 600,
            easing: "easeInOutExpo"
        });
        nbw.removeClass("but-hol").addClass("cmenu");
        setTimeout(function() {
            jQuery(".nav-title span").shuffleLetters({});
        }, 300);
    }

    function hideMenu() {
        nhw.animate({
            left: "-1064px",
            opacity: 0
        }, {
            queue: false,
            duration: 600,
            easing: "easeInOutExpo"
        });
        nbw.addClass("but-hol").removeClass("cmenu");
        nho.fadeOut(500);
    }
    nbw.on("click", function() {
        if (nbw.hasClass("but-hol")) showMenu();
        else hideMenu();
        return false;
    });
    nho.on("click", function() {
        hideMenu();
        return false;
    });
    jQuery(".sliding-menu a ").mousemove(function(e) {
        jQuery(this).shuffleLetters({});
    });
    var tooltips = document.querySelectorAll('.nav-overlay .tooltip');
    window.onmousemove = function(e) {
        var x = (e.clientX + 20) + 'px',
            y = (e.clientY + 20) + 'px';
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = y;
            tooltips[i].style.left = x;
        }
    };
    // Styles ------------------
    function csselem() {
        jQuery(".height-emulator").css({
            height: jQuery(".fixed-footer").outerHeight(true)
        });

    }
    csselem();
    var jQuerywindow = jQuery(window);
    jQuerywindow.resize(function() {
        csselem();
    });
    // Counter ------------------


    //   scroll to------------------
    jQuery(".custom-scroll-link").on("click", function() {
        var a = 80;
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
            var b = jQuery(this.hash);
            b = b.length ? b : jQuery("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                jQuery("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });


    jQuery(".scroll-init  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 80,
        threshold: 120,
        speed: 1200,
        currentClass: "act-scrlink"
    });
    jQuery(".to-top").on("click", function(a) {
        a.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    jQuery("<div class='to-top-letter'>t</div><div class='to-top-letter'>o</div><div class='to-top-letter'>p</div>").appendTo(".to-top span");
    //   Blog filter ------------------

    jQuery('.hero-decor-let').rotaterator({ fadeSpeed: 500, pauseSpeed: 1200 });

}
//   Parallax ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null === trueMobile) {
        var b = new Scrollax();
        b.reload();
        b.init();
    }
}
jQuery('.tab-control a').click(function (e) { 
    e.preventDefault();
    if(!jQuery(this).hasClass('checked')){
        jQuery('.tab-control a,.tabs-wr>div').removeClass('checked');
        jQuery(this).addClass('checked');
        jQuery(this).closest('.tabswr').find(jQuery(this).attr('href')).addClass('checked');
    }
    
});
jQuery('.tab-head span').click(function (e) { 
    e.preventDefault();
    if(!jQuery(this).hasClass('checked')){
        jQuery('.tab-head span').removeClass('checked');
        if(!jQuery(this).hasClass('connect')){
            jQuery('.footer-contacts.connect').hide();
            jQuery('.footer-contacts.support').show();
        }else{
            
            jQuery('.footer-contacts.support').hide();
            jQuery('.footer-contacts.connect').show();
        }
        jQuery(this).addClass('checked');
    }
    
});

//   Init All ------------------
jQuery(function() {
    jQuery('select').niceSelect();
    initparallax();
    initSolonick();
});