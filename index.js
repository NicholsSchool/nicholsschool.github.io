// Smooth scroll to
$(document).on('click', 'a[href*="#"]',  function (e) {
   e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 'slow');
});

$('#header').load("/header.html", function(){
    if(window.location.pathname != '/index.html' && window.location.pathname != '/')
    {
        $('.link').each(function (index) {
            $(this).attr('href', '/index.html');
        })
    }
});