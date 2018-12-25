jQuery(document).ready(function ($) {
  $(".mobile-menu-icon svg, .mobile-menu-close").on("click", function (t) {
    t.preventDefault();
    $(".mobile-menu").toggleClass("mobile-menu--closed");
  })
});