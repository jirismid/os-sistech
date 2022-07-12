(function ($) {
    $(document).ready(function () {
        $('body').addClass('slowImg');  

        function iframeFix(){
            $('iframe.fix').wrap('<div class="fix-iframe" />');
            $('.fix-iframe').prepend('<img src="design/img/bg_iframe.gif" />');
        }
        iframeFix();

        $( "#menu-btn" ).click(function() {
            $( this ).parent().find('#paragraph-menu').slideToggle();
            $( this ).toggleClass('is-active');
        });


/*  
nefunkční....

      function ClassPage(){
             if $( "#uvod" ).show {
                $('.header').addClass('homeClass');

            //Otherwise remove inline styles and thereby revert to original stying
            } else {
                $('.header').removeClass('homeClass');

            }
        };*/

//        $('.paragraph--type--clanek').each(function () {
//            $href = $(this).attr('id');
//            $item = $(this).find('.paragraph-nadpis').text();
//            $("#paragraph-menu").append('<li><a href="#'+ $href +'"><span> ' + $item + '</span></a></li>');

//        });

        $( "#tabs" ).tabs(); // pro zapnutí tabů musíme v šabloně divu .layout-content přidat id #tabs


        $(window).scroll(function() {

            //After scrolling 100px from the top...
            if ( $(window).scrollTop() >= 30 ) {
                $('.header').addClass('scroll');

            //Otherwise remove inline styles and thereby revert to original stying
            } else {
                $('.header').removeClass('scroll');

            }
        });

        $('.owl-carousel').owlCarousel({    //inicializace OWL Carousel včetně nastavení
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $(".cbox-items a").colorbox({
            opacity:0.5 ,
            rel:'group1',
            maxWidth: "100%",
            maxHeight: "100%",
        });  

        $('a.ui-tabs-anchor').click(function (e) {
            window.location.hash = $(this).attr('href');
            e.preventDefault();
        });

        // schovani menu v mobilu ..klikatelna oblast
        $('a.ui-tabs-anchor i').click(function () {
            $('#paragraph-menu').slideToggle();
            $( "#menu-btn" ).toggleClass('is-active');
        });
        
        $('a.tab').click(function () {
            $url = $(this).attr('href');
            $('a.ui-tabs-anchor').each(function () {
               if ( $(this).attr('href') === $url) {
                   $(this).trigger('click');
               }
            });
        });

        $( ".header-image" ).prependTo( ".header" );
        $( ".field--field-footer" ).prependTo( ".footer" );
        
        function ScrollUp() {
            $(window).scroll(function() {
                if ($(this).scrollTop()) {
                    $('#scrollTop').fadeIn(); // .toTop html prvek - selector pro button "Scroll up" stačí přepsat libovolnym elementem
                } else {
                    $('#scrollTop').fadeOut(); 
                }
            });

            $('#scrollTop').on('click', function(event){
                event.preventDefault();
                $('body,html').animate({
                        scrollTop: 0
                    }, 700
                );
            });
        }

        function ScrollTo() {  // pro zapnutí ScrollTo musíme v šabloně page.html.twig headeru přidat třídu .scrollTo

            $('.scrollTo #paragraph-menu li a').click(function () {
                $href = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $($href).offset().top
                }, 1000);
            });
        }
        $("a.vp").click(function() {
            $(this).colorbox({iframe:true, innerWidth:900, innerHeight:600});
        });
        ScrollTo();
        ScrollUp();

    });
})(jQuery);
