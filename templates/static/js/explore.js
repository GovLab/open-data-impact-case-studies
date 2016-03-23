$(document).ready(function() {

    $("#map-visualization").hide();

    $('#explore-button-graphic').on ("click", function() {
        $("#circle-graph").show();
        $("#explore-tab-caption").html("<p>Explore how open data facilitates innovation by delving into areas of impact</p>");
        $("#map-visualization").hide();
    })

    $('#explore-button-map').on ("click", function() {
        $("#explore-tab-caption").html("<p>To understand how open data transforms our world, click on the icons in this interactive graphic to select a global region and then sort case studies either by sector or area of impact.</p>");
        $("#map-visualization").show();
        $("#circle-graph").hide();
    })


});









