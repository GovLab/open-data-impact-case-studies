$(document).ready(function(){

    // $('#nav-explore').click(function() {
    //     TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    // });

    $('#explore-link').click(function(event) {
        event.preventDefault();
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    });



    // $('#top-section-arrow').click(function() {
    //     TweenLite.to(window, 0.5, {scrollTo:$('#a-section-1').offset().top, ease:Power2.easeOut});
    // });

    // enabling

    var trigger1 = $('#trigger-1');
    var trigger2 = $('#trigger-2');
    var trigger3 = $('#trigger-3');
    var trigger4 = $('#trigger-4');
    var badge1 = $('#badge-1');
    var badge2 = $('#badge-2');
    var badge3 = $('#badge-3');
    var badge4 = $('#badge-4');
    var badge1Done = false; // maybe this will improve efficiency ?
    var badge2Done = false;
    var badge3Done = false;
    var badge4Done = false;
    var stickyAppeared = false;
    var stickyDisappeared = false;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height(); // inside handler because window size could have changed between events, prob. not the fastest way

        // if (!stickyAppeared) {
        //     if (scroll > 400) {
        //         $('.b-sticky').removeClass('m-hidden');
        //         $('.b-sticky').fadeIn('fast');
        //         $('#overlay').addClass('m-active');
        //         stickyAppeared = true;
        //     }
        // }

        // if (!stickyDisappeared) {
        //     if (scroll >= $('#a-explore').offset().top) {
        //         $('.b-sticky').fadeOut('fast');
        //         $('#overlay').removeClass('m-active');
        //         stickyDisappeared = true;
        //     }
        // }

        if (!badge1Done) {
            // if center of window is scrolled past the top of the element
            if (scroll > trigger1.offset().top-windowHeight/2) {
                TweenLite.to(badge1, 1, {opacity: 1});
                badge1Done = true;
            }
        }

        if (!badge2Done) {
            if (scroll > trigger2.offset().top-windowHeight/2) {
                TweenLite.to(badge2, 1, {opacity: 1});
                badge2Done = true;
            }
        }

        if (!badge3Done) {
            if (scroll > trigger3.offset().top-windowHeight/2) {
                TweenLite.to(badge3, 1, {opacity: 1}); // $teal
                badge3Done = true;
            }
        }

        if (!badge4Done) {
            if (scroll > trigger4.offset().top-windowHeight/2) {
                TweenLite.to(badge4, 1, {opacity: 1});
                badge4Done = true;
            }
        }

    });

});