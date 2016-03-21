$(document).ready(function() {

    animateScroll();
    stickyNav();
    scrollSpy();

// BIND CLICK TO NAVIGATION AND ANIMATE SCROLLING
    function animateScroll() {
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
    }


// STICKY NAVIGATION
    function stickyNav() {
        $( window ).scroll( function(){
            // SCROLL LOCATION
            var yPosition = $( window ).scrollTop();
            // HEIGHT OF WINDOW
            var visibleArea = $( window ).height();
            // WHERE TO STICK THE NAV USING ELEMENT HEIGHT
            var headerHeight = $( '.b-top-nav' ).height() + $(".e-nav-group").height();
            // FIND SCROLL POSITION TO LOCK VIEW
            var maxScroll = visibleArea - headerHeight;

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
    }



// SCROLL SPY
    function scrollSpy() {
        $(window).scroll(function() {
            // GRAB SCROLL MENU
            var scrollMenu = $(".e-scrollspy");
            // GRAB ALL LINKS WITHIN SCROLL MENU
            var scrollMenuItems = scrollMenu.find("a");

            var scrollItems = [];

            scrollMenuItems.map(function(x){
                // IF THERE IS AN HREF PUSH IT TO SCROLL ITEMS ARRAY
              var item = $($(this).attr("href"));
              scrollItems.push(item);
                  if (item.length) { 
                    return item; 
                }
            });

            // FIND THE CURRENT SCROLL POSITION
            console.log(scrollItems)
            var currentScrollPosition = $(this).scrollTop();
            // LOOP THROUGH SCROLL ITEMS
            for (var i = 0; i < scrollItems.length; i++) {
                var currentEl = $("#" + scrollItems[i].attr("id"));

                if (currentEl.offset().top > currentScrollPosition) {
                    scrollMenuItems.map(function() {
                        if (this.hash === currentEl.selector) {
                            scrollMenuItems.map(function() {
                    // REMOVE ACTIVE CLASS FOR ALL LIST ITEMS
                            $(this).parent("li").removeClass("active")
                        })
                    // ADD ACTIVE CLASS TO ACTIVE LIST ITEM
                            $(this).parent("li").addClass("active");
                        }
                    });
                    return (currentEl);
                }
            }
        });
    }
    
});









