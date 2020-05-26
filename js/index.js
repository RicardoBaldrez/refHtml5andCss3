$(document).ready(function() {

    $('.home').click(scrollTop);

    /* Animation scroll */
    function scrollTop () {

        var blogTop = $('.main_articles').offset().top;
        
        $('body, html').animate({
        
             scrollTop: (blogTop ) + 'px'

        }, 1200);
    };
});