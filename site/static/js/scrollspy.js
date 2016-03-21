$(document).ready(function() {

// BIND CLICK TO NAVIGATION AND ANIMATE SCROLLING
    // LOCATE THE NAV MENU
    var scrollMenu = $(".e-scrollspy");
    // GRAB ALL LINKS
    var scrollMenuItems = scrollMenu.find("a");

    scrollMenuItems.on ("click", function(e) {
        e.preventDefault();
        var link = $(this).attr("href");
        var linkOffset =  $(link).offset().top - $(".e-nav-group").height();
        // console.log("link", link);
        // console.log("link offset", linkOffset);
        $('html, body').stop().animate({
            'scrollTop': linkOffset
        }, 400);
    })


// STICKY NAVIGATION
    $( window ).scroll( function(){
        // SCROLL LOCATION
        var yPosition = $( window ).scrollTop();
        // HEIGHT OF WINDOW
        var visibleArea = $( window ).height();
        // WHERE TO STICK THE NAV USING ELEMENT HEIGHT
        var headerHeight = $( '.b-top-nav' ).height() + $(".e-nav-group").height();
        // FIND SCROLL POSITION TO LOCK VIEW
        var maxScroll = visibleArea - headerHeight;

        // console.log("yPosition", yPosition);
        // console.log("visibleArea", visibleArea);
        // console.log("headerHeight", headerHeight);
        // console.log("maxScroll", maxScroll);
        // console.log(yPosition,maxScroll);
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









