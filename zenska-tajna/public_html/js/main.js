$(document).ready(function () {
    var w = $(window).innerWidth();
    $(window).resize(function () {
        w = $(window).innerWidth();
    });
    $('.navbar .dropdown > a').click(function (e) {
        e.preventDefault();
        if (w < 768) {
//            $('.dropdown-menu').slideUp();
//            $(this).next('.dropdown-menu').slideToggle();
            if ($(this).next().hasClass('active')) {
                $(this).next().removeClass('active');
                $(this).next().slideUp();
            } else {
                $('.dropdown-menu').removeClass('active');
                $('.dropdown-menu').slideUp();
                $(this).next('.dropdown-menu').addClass('active');
                $(this).next('.dropdown-menu').slideDown();
            }
        }
    });
    if ($('.core-slider').length > 0) {
        $('.core-slider').coreSlider({
// autoplay interval
            interval: 5000,
            // infinite loop
            loop: true,
            // enable autoplay
            slideshow: false,
            // enable auto resize depending on the screen size
            resize: true,
            // pause on hover
            pauseOnHover: true,
            // start on hover
            startOnHover: false,
            // slider selectors
            sliderSelector: '.core-slider_list',
            viewportSelector: '.core-slider_viewport',
            itemSelector: '.core-slider_item',
            // enable nav arrows
            navEnabled: false,
            // selectors for nav arrows
            navSelector: '.core-slider_nav',
            navItemNextSelector: '.core-slider_arrow__right',
            navItemPrevSelector: '.core-slider_arrow__left',
            // enable nav dots
            controlNavEnabled: true,
            // selectors for nav dots
            controlNavSelector: '.core-slider_control-nav',
            controlNavItemSelector: 'core-slider_control-nav-item',
            // will be added when slider is fully loaded
            loadedClass: 'is-loaded',
            // will be added to cloned slides (see option 'clone')
            clonedClass: 'is-cloned',
            // will be added when item is disabled (in most of cases - item will be display: noned)
            disabledClass: 'is-disabled',
            // will be added to active items (for example control navs, etc.)
            activeClass: 'is-active',
            // Reload gif's on slide change for replaying cycled animation inside current slide
            reloadGif: false,
            // Indicates, that at begin and at end of slider carousel items will be cloned to create 'infitite' carousel illusion
            clone: false,
            // How mutch items will be placed inside viewport. 
            // Leave 1 if this is slider, 2 ot more - it will look like a carousel                                           
            items: 1,
            // How many items must be slided by one action (NOTE: Must be less than 'items' option)                             
            itemsPerSlide: 1,
            // How mutch items will be cloned at begin and at end of slider                    
            cloneItems: 0

        });
    }

    if ($('.owl-carousel').length > 0) {

        $('.products').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav: true,
            navText: ["", ""],
            rewindNav: true,
            dots: false,

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3

                },

                992: {
                    items: 4

                }
            }
        });
    }


    $('.trend').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        navText: ["", ""],
        rewindNav: true,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3

            }

        }
    });
    $('.trends').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        navText: ["", ""],
        rewindNav: true,
        dots: false,

        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 4
            },
            768: {
                items: 5

            },
            992: {
                items: 6

            }

        }
    });


    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    };
    $(function () {
        $('img.xyz').hover(sourceSwap, sourceSwap);
        
    });
    
    


});