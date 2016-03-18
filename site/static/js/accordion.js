$(document).ready(function() {
  $('.accordion-item').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
});
