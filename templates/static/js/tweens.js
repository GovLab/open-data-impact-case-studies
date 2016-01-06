$(document).ready(function(){

    $('#nav-explore').click(function() {
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    });

    $('#explore-button').click(function() {
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    });

    $('#top-section-arrow').click(function() {
        TweenLite.to(window, 0.5, {scrollTo:$('#a-section-1').offset().top, ease:Power2.easeOut});
    });

    var badge1 = $('#badge-1');
    var badge2 = $('#badge-2');
    var badge3 = $('#badge-3');
    var badge4 = $('#badge-4');
    var badge1Done = false; // maybe this will improve efficiency ?
    var badge2Done = false;
    var badge3Done = false;
    var badge4Done = false;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height(); // inside handler because window size could have changed between events, prob. not the fastest way

        if (!badge1Done) {
            // if center of window is scrolled past the top of the element
            if (scroll > badge1.offset().top-windowHeight/2) {
                TweenLite.to(badge1, 1, {color:'rgba(0,136,149,.5)'});
                badge1Done = true;
            }
        }

        if (!badge2Done) {
            if (scroll > badge2.offset().top-windowHeight/2) {
                TweenLite.to(badge2, 1, {color:'rgba(0,136,149,.5)'});
                badge2Done = true;
            }
        }

        if (!badge3Done) {
            if (scroll > badge3.offset().top-windowHeight/2) {
                TweenLite.to(badge3, 1, {color:'rgba(0,136,149,.5)'}); // $teal
                badge3Done = true;
            }
        }

        if (!badge4Done) {
            if (scroll > badge4.offset().top-windowHeight/2) {
                TweenLite.to(badge4, 1, {color:'rgba(0,136,149,.5)'});
                badge4Done = true;
            }
        }

    });

});