$(function() {
    // inline references
    $('.b-sticky').hide();
    $('a[data-open]').click(function() {
        event.preventDefault();
        $($(this).attr('data-open')).removeClass('m-closed');
        $($(this).attr('data-open')).fadeIn('fast');
    });

    // more button
    $('.js-more-toggle').click(function() {
        $(this).parent().toggleClass('m-active');
    });

    // sidebar dynamic position behavior
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