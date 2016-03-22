// $(function() {
    var $grid = $('.grid').isotope({
        itemSelector: '.e-card',
        // masonry: {
        //     columnWidth: 300,
        //     isFitWidth: true,
        //     gutter: 10
        // }
        layoutMode: 'fitRows'
    });

    $('.js-filter').click(function() {
        $grid.isotope({ filter : $(this).attr('data-filter') });
    });

// });