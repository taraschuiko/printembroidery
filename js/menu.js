jQuery(document).ready(function ($) {
  $(".hamburger-icon, .hamburger-fade").on("click", function (t) {
    t.preventDefault();
    $(".hamburger").toggleClass("hamburger--closed");
    $(".hamburger-fade").toggleClass("hamburger-fade--closed");
  })
});