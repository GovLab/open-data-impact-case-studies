// site specific scripts

$(function() {
    // reflow the equalizer on tab change
    $('#explore-tabs').on('change.zf.tabs', function() {
        //$('#' + $(this).attr('id')).foundation();
        $(window).resize();  // workaround due to foundation 6 reflow not working properly??
    });
});