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

    $('#see-all-btn').focus();

    $('.js-filter').click(function(){
        event.preventDefault();
        var filterParam = $(this).attr('data-filter');
        if (filterParam === '*') {
            $grid.isotope({ filter : '*' })
        }
        else {
            $grid.isotope({ filter : '.' + filterParam })
        }
    });
});