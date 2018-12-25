jQuery(document).ready(function ($) {
  $(".mobile-menu-icon p, .mobile-menu-close").on("click", function (t) {
    t.preventDefault();
    $(".mobile-menu").toggleClass("mobile-menu--closed");
  })
});