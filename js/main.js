$(window).on('load', function() {

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*=====================================
        team     owl-carseol
 =====================================*/
$(function() {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });

});
/*=====================================
        progress bar
 =====================================*/

$(function() {
    $('#progress-elements').waypoint(
        function() {
            $('.progress-bar').each(
                function() {
                    $(this).animate({
                        width: $(this).attr('aria-valuenow') + '%'
                    }, 1000);
                }
            );
            this.destroy();
        }, { offset: 'bottom-in-view' }
    );

});
/*=====================================
             responsive tabs 
 =====================================*/

$(function() {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});
/*=====================================
             portfolio
 =====================================*/
$(window).on('load', function() {
    //initialize
    $('#isotop-container').isotope({



    });
    //filter item on button click
    $('#isotop-filters').on('click', 'button', function() {
        //get filter value 
        var filterValue = $(this).attr('data-filter');
        //filter porofolio
        $('#isotop-container').isotope({
            filter: filterValue
        });
        //active button
        $('#isotop-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*=====================================
             magnific
 =====================================*/
$(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*=====================================
            testimonial owl-carseol
 =====================================*/
$(function() {

    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});
/*=====================================
            stats counter 
 =====================================*/
$(function() {

    $('.counter').counterUp({
        delay: 10,
        time: 2000

    });
});

/*=====================================
        client     owl-carseol
 =====================================*/
$(function() {
    $('#client-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });

});

/*=====================================
       google map
 =====================================*/


$(window).on('load', function() {

    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function() {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});
/*=====================================
navigation
 =====================================*/
//  show and hide white navigation 
$(function() {
    showHideNav()
    $(window).scroll(function() {
        showHideNav()

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // show white 
            $("nav").addClass("white-nav-top");
            $('.navbar-header img').attr('src', "img/logo/logo-dark.png");
            $('#back-to-top').fadeIn();
        } else {
            // hide navigation
            $("nav").removeClass("white-nav-top");
            $('.navbar-header img').attr('src', "img/logo/logo.png");
            $('#back-to-top').fadeOut();
        }
    }
});
/*=====================================
SMOOTH scroll 
 =====================================*/
$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        // get elemt id 
        var section_id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo');

    });
});