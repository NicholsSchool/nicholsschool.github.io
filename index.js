// Smooth scroll to
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 'slow');
});

document.addEventListener("DOMContentLoaded", event => {
    $('#sticky-phantom').height($('#nav').height());
    $(window).scroll(function () {

       
         var distanceFromTop = $(this).scrollTop();
             var headerDistanceFromTop = $("#main-image").height() + $('#logos').height() - 32;
             console.log(headerDistanceFromTop)
        // console.log("This distance: " + distanceFromTop);
        // console.log("Header: " + headerDistanceFromTop );
         var duration = 5000;

         if (distanceFromTop >= headerDistanceFromTop) {
             $('#nav').addClass('fixed-top', { duration: duration }); //Don't know if this works
             $('#sticky-phantom').show();
        } else {
             $('#nav').removeClass('fixed-top', { duration: duration });
             $('#sticky-phantom').hide();
        }
    });
});

    console.log("loading");
    $('#header').load("/header.html", function(){
        if(window.location.pathname != '/index.html')
        {
            $('.link').each(function (index) {
                $(this).attr('href', '/index.html');
            })
        }
    });