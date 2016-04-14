// $(function() {
    var $grid = $('.grid').isotope({
        itemSelector: '.e-card',
        // masonry: {
        //     columnWidth: 300,
        //     isFitWidth: true,
        //     gutter: 10
        // }
        layoutMode: 'fitRows'
    }).addClass('claudio');

    $('#government-button').click(function(event) {
        event.preventDefault();
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
        $('#impact-tab').click();
        $('.js-filter').removeClass('selected');
        $('#government-filter').addClass('selected');
        $grid.isotope({ filter : '.impact-government' });
    });

    $('#citizens-button').click(function(event) {
        event.preventDefault();
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
        $('#impact-tab').click();
        $('.js-filter').removeClass('selected');
        $('#citizens-filter').addClass('selected');
        $grid.isotope({ filter : '.impact-citizens' });
    });

    $('#economic-button').click(function(event) {
        event.preventDefault();
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
        $('#impact-tab').click();
        $('.js-filter').removeClass('selected');
        $('#economic-filter').addClass('selected');
        $grid.isotope({ filter : '.impact-economic' });
    });

    $('#public-button').click(function(event) {
        event.preventDefault();
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
        $('#impact-tab').click();
        $('.js-filter').removeClass('selected');
        $('#public-filter').addClass('selected');
        $grid.isotope({ filter : '.impact-public' });
    });


    $('#see-all-btn').addClass('selected');

    $('.js-tween').click(function(e) {
        TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    });

    // $('.js-tab-override').click(function(e) {
    //     var w = window.location.href;
    //     window.location.href = w.replace(/^http(s)?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*?(:[0-9]+)?(\/)?/i, '') + '/explore.html';
    // });

    $('.js-filter').click(function(event){
        event.preventDefault();
        $('.js-filter').removeClass('selected');
        // $('.region').removeClass('selected');
        d3.selectAll('.region').classed('selected', false);
        $(this).addClass('selected');
        var filterParam = $(this).attr('data-filter');
        // dress up if probably not a selector
        if (!(/[*.~+>#=:()\[\]\s]/g.test(filterParam))) {
            filterParam = '.' + filterParam;
        }
        $grid.isotope({ filter : filterParam })

        if ($grid.data('isotope').filteredItems.length === 0) {
            $('#no-results').removeClass('m-hidden');
        } else {
            $('#no-results').addClass('m-hidden');
        }
    });

    function filterBy(param) {
        $('.js-filter').removeClass('selected');
        var filterParam = param;
        if (filterParam === '*') {
            $grid.isotope({ filter : '*' })
        }
        else {
            $grid.isotope({ filter : '.' + filterParam })
        }

        if ($grid.data('isotope').filteredItems.length === 0) {
            $('#no-results').removeClass('m-hidden');
        } else {
            $('#no-results').addClass('m-hidden');
        }
    }

// });