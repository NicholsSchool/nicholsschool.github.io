// Smooth scroll to
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 'slow');
});

var currentImage = 1;
$('#image2').hide();
$('#image3').hide();
var test = $('#nav').offset();
document.addEventListener("DOMContentLoaded", event => {
    $('#sticky-phantom').height($('#nav').height());
    $('.carousel-control-next').on('click', function (e) {
        e.preventDefault()
        $('.carousel').carousel('next')
    })
    $('#test').on("click", function() {

        // console.log('#image' + currentImage);
        // $('#image' + currentImage).hide();
        // currentImage ++;
        // if(currentImage > 3)
        //     currentImage = 1;

        // $('#image' + currentImage).show();
    });
    $('.carousel-control-prev').on('click', function (e) {
        e.preventDefault()
        $('.carousel').carousel('prev')
    })

    $(window).scroll(function () {

       
         var distanceFromTop = $(this).scrollTop();
        
         var duration = 5000;

        console.log("Distance from Top: " + distanceFromTop)
         if (distanceFromTop >= test.top) {
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