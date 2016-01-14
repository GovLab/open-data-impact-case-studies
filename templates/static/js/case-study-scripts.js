$(function() {

    $('.js-more-toggle').click(function() {
        $(this).parent().toggleClass('m-active');
    });

    var sidebar = $('.b-sidebar');
    var offset = sidebar.offset().top;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > offset) {
            if (!sidebar.hasClass('js-scroll-fixed')) {
                sidebar.addClass('js-scroll-fixed');
            }
        }
        else if (scroll < offset) {
            if (sidebar.hasClass('js-scroll-fixed')) {
                sidebar.removeClass('js-scroll-fixed');
            }
        }
    });

});