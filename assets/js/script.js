(function($) {

	"use strict";

    $('.select').niceSelect();

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var sideBar = $(".side-bar");
        var openBtn = $(".navbar .navbar-toggler");
        var closeBtn = $(".side-bar .close-btn");

        openBtn.on("click", function() {
            if (!sideBar.hasClass("show")) {
                sideBar.addClass("show");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (sideBar.hasClass("show")) {
                sideBar.removeClass("show");
            }
            return false;
        })
    }

    toggleMobileNavigation();


    /*------------------------------------------
    = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();

            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });


    /*------------------------------------------
    = POPUP CHAT
    -------------------------------------------*/

//     const toggleChatboxBtn = document.querySelector(".js-chatbox-toggle");
// const chatbox = document.querySelector(".js-chatbox");
// const chatboxMsgDisplay = document.querySelector(".js-chatbox-display");
// const chatboxForm = document.querySelector(".js-chatbox-form");

// // Use to create chat bubble when user submits text
// // Appends to display
// const createChatBubble = input => {
//   const chatSection = document.createElement("p");
//   chatSection.textContent = input;
//   chatSection.classList.add("chatbox__display-chat");

//   chatboxMsgDisplay.appendChild(chatSection);
// };

// // Toggle the visibility of the chatbox element when clicked
// // And change the icon depending on visibility
// toggleChatboxBtn.addEventListener("click", () => {
//   chatbox.classList.toggle("chatbox--is-visible");

//   if (chatbox.classList.contains("chatbox--is-visible")) {
//     toggleChatboxBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
//   } else {
//     toggleChatboxBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
//   }
// });

// // Form input using method createChatBubble
// // To append any user message to display
// chatboxForm.addEventListener("submit", e => {
//   const chatInput = document.querySelector(".js-chatbox-input").value;

//   createChatBubble(chatInput);

//   e.preventDefault();
//   chatboxForm.reset();
// });


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }

    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).addClass("shadow-sm").removeClass('original');
    }

    // clone navigation for sticky menu
    if ($('.site-header .navigation').length) {
        cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.site-header .navigation');

        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;
    }

    
    /*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function(e) {
            searchContent.toggleClass("header-search-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function() {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/
    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }


    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    // if($(".post-slider".length)) {
    //     $(".post-slider").owlCarousel({
    //         mouseDrag: false,
    //         smartSpeed: 500,
    //         margin: 30,
    //         loop:true,
    //         nav: true,
    //         navText: ['<i class="fi ti-angle-left"></i>','<i class="fi ti-angle-right"></i>'],
    //         dots: false,
    //         items: 1
    //     });
    // }  


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
        $(window).on('load', function() {

            preloader();
            
            toggleMobileNavigation();

        });


    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

		if ($(".site-header").length) {
            stickyMenu( $('.site-header .navigation'), "sticky-on" );
        }

    });


})(window.jQuery);
