$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    animateOut: "fadeOut",
    autoplay: true
  });
  var currentYear = new Date;
  $("#current-year").text(currentYear.getFullYear());
});
