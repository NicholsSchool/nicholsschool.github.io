
// parallax.js from http://untame.net/2013/04/how-to-integrate-simple-parallax-with-twitter-bootstrap/
$(document).ready(function () {
    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function () {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                            
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% ' + yPos + 'px';

            // move the background
            // $scroll.css({ backgroundPosition: coords });
            $scroll.css('background-position', coords);
        }); // end window scroll
    });  // end section function

    // http://stackoverflow.com/questions/33840128/parallax-js-and-bootstrap-carousel
    $('img[data-type="img"]').each(function () {
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function () {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                            
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = yPos + 'px';

            // move the background
            // $scroll.css({ backgroundPosition: coords });   
            $scroll.css('top', coords);
        }); // end window scroll
    });  // end section function
}); // close out script

// this function is for the navbar only
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background-color', '#ffffff');
            } else {
                $('.navbar-default').css('background-color', 'transparent');
            }
        });
    }
});

/* Create HTML5 element for IE */
document.createElement("section");