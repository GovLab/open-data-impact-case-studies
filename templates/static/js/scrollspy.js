$(document).ready(function() {

// STICKY NAVIGATION
    $( window ).scroll( function(){
        // SCROLL LOCATION
        var yPosition = $( window ).scrollTop();
        // HEIGHT OF WINDOW
        var visibleArea = $( window ).height();
        // WHERE TO STICK THE NAV USING ELEMENT HEIGHT
        var headerHeight = $( '.b-top-nav' ).height() + $(".e-nav-group").height();

        var maxScroll = visibleArea - headerHeight;


    console.log(yPosition,maxScroll);
        if ( yPosition > maxScroll) {
            $('.e-scrollspy').css('position', "fixed");
            $('.e-scrollspy').css('top',$(".e-nav-group").height());
            $('.long-reading').addClass("medium-offset-3 end");
            $('.b-top-nav').css('display','block');
        } else {
            $('.e-scrollspy').css('position', "static");
            $('.long-reading').removeClass("medium-offset-3");
            }
        });

});









