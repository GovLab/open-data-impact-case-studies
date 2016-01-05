$(document).ready(function(){

    $('#nav-explore').click(function() {
        TweenLite.to(window, 0.3, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    });

});