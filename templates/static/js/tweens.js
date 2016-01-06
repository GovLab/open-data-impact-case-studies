$(document).ready(function(){

    $('#nav-explore').click(function() {
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    });

    $('#top-section-arrow').click(function() {
        TweenLite.to(window, 0.5, {scrollTo:$('#a-section-1').offset().top, ease:Power2.easeOut});
    });

});