// Smooth scroll to
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 'slow');
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