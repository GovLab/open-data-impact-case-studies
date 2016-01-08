// site specific scripts

$(function() {
    // reflow the equalizer on tab change
    $('#explore-tabs').on('change.zf.tabs', function() {
        //$('#' + $(this).attr('id')).foundation(); // doesn't work, although this was supposed to be the way to 'reflow' stuff in foundation 6
        // $(window).resize();  // workaround due to foundation 6 reflow not working properly??
    });
});