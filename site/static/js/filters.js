$(function() {
    var $grid = $('.grid').isotope({
        itemSelector: '.e-card',
        // masonry: {
        //     columnWidth: 300,
        //     isFitWidth: true,
        //     gutter: 10
        // }
        layoutMode: 'fitRows'
    });

    $('#see-all-btn').addClass('selected');

    $('.js-filter').click(function(){
        event.preventDefault();
        $('.js-filter').removeClass('selected');
        $(this).addClass('selected');
        var filterParam = $(this).attr('data-filter');
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
    });
});